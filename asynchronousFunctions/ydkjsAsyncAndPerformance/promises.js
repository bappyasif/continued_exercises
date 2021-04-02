// what Is a Promise
// lets look at conceptually first so taht we can understand wht promise is and how it works and why and all those nitty gittys

// Future Value
// once a transaction of Promise started, we get Future value from a request
// this future value is time independent and works as a placeholder
// once future value is ready, we can exchange value-promise for value itself
// we should also rememebr there is anotheer possiblity of value-promise could turn out ot be a failure, so we shall code around it, what to do then

// Values Now and Later
let x,
  y = 4;
console.log(x + y);
// how to possibly reason about codes if either one or any of them might not be ready for operations
// if statement 2 relies on 1 to finish, there could be two options,statement 1 finished now, and evrything is fine or dint finish yet and it will fail
// using callback we can make sure that x+y should only continue when both values are ready for its operation otherwise wait until they does and add as soon as possible
function add(getX, getY, cb) {
  let x, y;
  getX((valX) => {
    x = valX;
    if (y !== undefined) {
      cb(x, y);
    }
  });
  getY((valY) => {
    y = valY;
    if (x !== undefined) {
      cb(x, y);
    }
  });
}
// by using sync/async calls
add(fetchX, fetchY, function sum(x, y) {
  console.log(x + y);
});
// here we treated both x and y as future values, it normalizes now and later such that we can rely on predictable outcome of add(..) operation
// to consistently handle both now and later, we make both of them later, all operations become async

// Promise Value
// now lets have a look at how we would handle it using Promise API instead fo callbacks
function add(xPromise, yPromise) {
  // Promise.all([..]) takes an array of prrimises and returns a new promise that awwaits on them to finsih
  return (
    Promise.all([xPromise, yPromise])
      // when that promise is resolved considering in success, lets get values of x and y to add them together as inteneded
      .then((vals) => {
        // vals are an array of values both x and y from prevoiously resolved promise
        return vals[0] + vals[1];
      })
  );
}
// fetchX() and fetchY() return promises for their respective values, and may ready for now or later
add(fetchX(), fetchY())
  // we get a promise back for sum of those values, now by chaining then we can get sum of that returned promises
  .then((sum) => console.log(sum));
// there are two layers of Promises in this snippet, each promises that pased into add(..) normmalizes behavior to be same regardles, that is they are async, time independent and future values
// second layer of promises are created using Promise.all([..]) and returns which we wait on them by calling then(..), when add() finishes we get value of sum and we can use it as we reuire
// just like fullfilment there could be another possiblity of rejection reason, and we can set it directly by program logic or it can result implicitly from a runtime exception
add(fetchX(), fetchY()).then(
  // fullfilemnt handler
  (sum) => console.log(sum),
  // rejection handler
  (err) => console.log(err)
);
// Promises encapsulate time-dependent state, fullfilment/rejection from outside
// Promise itself is a time-independent and thus Promises can be composed in predictable ways regrad;ess of timing or outcome underneath
// once a Promise is resolved it stays that way forever, it becomes an immutable value at that point and can be observed as many tmes necessary
// as Promise is externally immutable once resolved, so now it's safer to pass around our code to any third party, knowing that it can not be acccidentally or mailiciously modified
// promises are an easily repeatable mechanism for encapsulating and composing future values without have to use any extra ad hoc logic that we had to use around our callbacks to handle "inversion of control"

// Completion Event
// an individual Promise behaaves as a future value, a Promise can also be thought of as a flow-control mechanism, as in a temporal this-then-that, for two or more steps in asynchronous task
// in typical Javascript fashion, when we need to listeen for any notfiication, we'd be thinking events
// we could reframe our need for notification as a need to listen for a compltion or continuation event emitted by related function
// whether we call it "completion event" or "continuation event" depends on perrspective, is focus more on whether foo(..) what happens with it or what happens after foo(..) finishes
// event notification tells us that foo(..) has completed and also it's safe and ready to continue with next step
// continuations aspect of it deals with callbacks and completion aspect more focused on foo(..) or what happens within
// with callbacks "notification" would be callback invoked by foo(..) where as with Promise we listen for an eveent from foo(..) and when notifiied proceed accordingly
function foo(x) {
  // start doing something that could take a while
  // make a listener event notification capability to return
  return listener;
}
let evt = foo(42);
evt.on("completion", function () {
  // here we can do next step as intended
});
evt.on("failure", function (err) {
  // oops something went wrong
});
// foo(..) expressly creates an event subscription capability to return back calling code recieves and registers two event handler against it
// this inversion from normal callback oriented code should be notable here, instead of passing callbacks to foo(..), it returns an event capability "evt" which recieves callbacks, so it's an inversion of inversion of control, where we wanted to be in first place
// another important benefit is that mutiple separate parts of can code can be give this event listening capability, and thy all can be independent of each other and perform as they require after it's completion
let evt = foo(42);
let bar = evt; // let bar() listens for foo(..) completion
let baz = evt; // let baz() listens for foo(..) completion
// this uninversion of control enables a better separation of concern where bar(..) and baz(..)dont neeed to be invokved how foo(..) is called
// and similarly foo(..) doesnt need to know or care about whether bar(..) or baz(..) exist or not when foo(..) completes
// essentially this "evt" object is a nuetral third-party negotiation between separate concerns

// Promise Events
// so far "evt" event listening capabality is an analogy for Promise, where in context of foo(..) would have create and returned a Promise instance, and that would have been latet n passed on to bar() and  baz()
// Promise resolution "events" we listen for arent strictly eveents paer say but they sure behave as if they are, and they're not typically called "completion" or "error", instead we use then(..) to register a "then" event
// or to put it more precisely, then(..) registers "fullfilment" and/or "rejection" events, though we dont use those terms explicitly in Promise code
function foo(x) {
  // start an async call, that could take a while
  // construct and return a promise
  return new Promise((resolve, reject) => {
    // eventually, call resolve() or reject(), which are resolution for promise
  });
}
let p = foo(42);
bar(p);
baz(p);
// this pattern shown with new Promise(function(..){..}) is gnerally known as "revealing constructor"
// function passed in is executed immediately (not async defered to then() callback) and it's provided two parameters for success or failure signals
// so lets look at how those bar(..) and baz(..) function might lok like to access that Promise value in them
function bar(fooPromise) {
  // listen for fooPromise to complete first
  fooPromise.then(
    function success() {
      // foo(..) has now finished, do bar(..)'s tasks
    },
    function failure() {
      // oopps something went wrong, so bar(..) didn't run
    }
  );
}
function baz(fooPromise) {
  // listen for fooPromise to complete first
  fooPromise.then(
    function success() {
      // foo(..) has now finished, do baz(..)'s tasks
    },
    function failure() {
      // oopps something went wrong, so baz(..) didn't run
    }
  );
}
let p = foo(42);
p.then(bar);
p.then(baz);
// aanother way to approcah this is
function bar() {
  // foo(..) has definitely finished, so do bar(..)'s task
}
function oopsBar() {
  // oopps something went wrong in foo(..) so bar(..)'s task didn't run
}
function baz() {
  // foo(..) has definitely finished, so do baz(..)'s task
}
function oopsBaz() {
  // oopps something went wrong in foo(..) so baz(..)'s task didn't run
}
let p = foo(42);
p.then(bar, oopsBar);
p.then(baz, oopsBaz);
// if we were to use chaiinable then() it would have been a different implication altogether cause they two totally different thing
// we have seen diffrent ways of using Promise by now, instead of passing a Promise o bar(..) or baz(..), we used promise to control when bar(..) and baz(..) will get executed, if ever, rimary difference is notably how error is being handled
// there is no correct approach peer say, based on scenrios one is preferred over that other, in either case, Promise that coome back from foo() controls what happens next
// in above snipppet both snipppet uses then(..) twice against sam Promise, and as we know once a Promise is resolved it stays immutable but observable by any subsequent then(..)'s as many times required
// whenever p is resolved, next step will always be same bth for now and later

// Thenable Duck Typing
// in Promises-land, an important detail is how to know for a certainty that is some value is a Promise or not, or is it a value taht behave like a Promise
// it was decided that waay to identify a Promise is if it is a thenable or has then(..) method in it, it is assumed that any such value is Promise-conforming thenable
// genrally "type-checks" about a values "type" based on its shape or what properties does it have in it, also known as "duck typing"
// duck typing check for a thenable would be:
if (
  p !== null &&
  (typeof p === "object" || typeof p === "function") &&
  typeof p.then === "function"
) {
  // assumee it's a thenable
} else {
  // not thenable
}
// as ugly it might look here for thenable duck typing, it still has a massive flaw in it
// if any of our function or object ha a method call "then" in it but it was not meant to be treateed as {Promise aalike then(), that type check is not going to be efective at all
let o = {then:  function() {}};
// making an prototype object of "o"
let v = Object.create(o);
v.someStuff = "cool";
v.otherStuff = "not cool";
// "v" doesn't look like a "thenable" at all but v[[prototype]] is "o" and that has a method called "then" so in duck typing checks would pressume "v" as a Promise
// lets look at from an another example
Object.prototype.then = function() {};
Array.prototype.then = function() {};
let v1 = {"hello": "world"};
let v2 = {hello: "world"};
// in this case bothv1 and v2 are thenables, so as we can not control if anyone suspeciously adds a then(..) method to Object.prototyppe or Array.prototype or any other native prototypes, duck typing check would be fullty for them
// standard deision to takee on "then" by ES6 and onwards means that no libraries or object can now have this newly "reserved" keyword anymore, preventing itself to become incompatible with Promised based async coding

// Promise Trust
// we've seen how two strong analogies that explain different aspects of what Promises can do for our async code
// Promises can do a lot more than just "future values" and "event completion", it's existence was due to avrt "inversion of Trust" issue fromm calllback and superbly it handled all of those aspects
// Such as
    // calling callback too early
    // calling callback too late
    // calling callback too little or many times
    // fail to pass along any necessary enviroonment/parameters
    // swallow any errors/exceptions that may happen
// characteristics of Promises are intentionally designed to provide usefful, repeatable answers to alll those concerns effectively
    // calling callback too early
// where callback was prone to race conditions for task due to their asynchronicity, promise by definition cannot be succeptibel to this cconcern
// Promise makes sure everything runs asynchronously, thus preventing Zalgo automatically
    // calling callback too late
// callbacks are automatically scheduled when either resolve() or reject() gets called by Promise creation capability, those callbacks will predictably be fired at next asyncchronous moment
// it's not possbile for a synchronous chain of tasks to run in such a way to account for any "delay" another callback from happening as expected
// when a Promise is resolved, all then(..) registered callbacks on it will be called, in order, immediately at next available tick/asynchronous opportunity, nothing thayt happens in any of tthose chained callback can change or affect calling of other callbacks
p.then(function() {
    p.then(function() {
        console.log("C")
    });
    console.log("A");
});
p.then(function() {
    console.log("B");
});
// here "C" can not interrupt or precede "B", by virtue of Promises are defined, thus that snippet will ouutput in order A,B,C
    // Promise scheduling quirks
// it's important to note thata there are lots of nuances of scheduling where relative ordering between ccllbacks chained off two separate Promises are not reliably predicted
// if two promises are resolved, it shoulld also be true tthat p1.then(); p2.then() would mean p1 callback will run before p2 does, but there are subtle cases where that might not be true
let p3 = new Promise(function(resolve, reject) {
    resolve("B");
});
let p1 = new Promise((resolve, reject) => {
    resolve(p3);
});
let p2 = new Promise((resolve,reject) => {
    resolve("A");
});
p1.then(v => console.log(v))
p2.then(v => console.log(v));
// resulting A,B not B,A
// p1 has a another promise inside of it rather than just an "Immediate value" as P2 or P3 alone thus creating that effect of A,B not otherwise
// to avoid such nuanced nightmares, we should never reply on anything about ordering/scheduling of callbacks across Promises, avoid it when we can
    // callback Never being called
// nothing can prevent a Promise from being notifying us of it's resolution, either of fullfilment or rejection callback will be called
// what if Promise itself never gets resolved either way, even that is condition that Promises provide an answer for using higher level abstracctiono called "race"
// a utility for timeout a Promise
function timeoutPromise(delay) {
  return new Promise((resolve,reject) => {
    setTimeout(() => reject("Timedout"), delay);
  });
}
// setup foo() with timeout
Promise.race([foo(), timeoutPromise(2000)])
.then(success, failure);
function success() {
  // foo(..) fulfiled in time
}
function failure() {
  // foo(..) either rejected or didnt finish in time
}
// thus we can ensure a singal of eithr success or failure from foo() after timer expired, to prevent it from hanging our code indefenitely
    // calling too Few or too Many times
// by definition a callback should be called once, too few case would be zero calls or never being called
// too many case is when a Promise creation code tries to call resolve(..) or reject(..) multiple times or tries to call both
// Promise will only accept first resolution and will silently ignore any subsequent attempts of calling resolve() or reject()
// as Promise can only be resolved once any then() registered callbacks will also be ever called just once for each of them
    // failing to Pass Along any parameters/environment
// as we know Promises can have at most one resolution value(fullfilment or rejection)
// if we don;t explicitly resolve with a value either way it will be undefined, whatever that value is, will always be passed to all registered and appropriate callbacks either now or in future
// something to be aware of, if we call resolve() or reject() with multiple parameters, all subsequent parameters after first will be silently ignored otherwise it will sonstitutes an invalid Promise mechnism and thus we are protected
// so when required to pass along multiple parameters we should think of passing it along as an array or object and thus work around that notion
// as for environement, functions can always retain their closures of scope in which theey're defined, so in that way we already covered from by virtue of JS not just Promise API
    // swallowing any Errors/Exception
// this is a restatement of previous point, when we reject a Promise with a reason, that value is passed along to rejection callback/s
// but there is more to it, if any point in creation of Promise or observation of it's resolution a JS excption occurs, such as a Typeerror or ReferenceError, that will be cauught and force Promise to be rejected
let p = new Promise((resolve, reject) => {
  foo.bar(); // foo.bar() is not defined, so error!!
  resolve(42); // it never gets here!!
});
p.then(fullfiled, rejected);
function fullfiled() {
  // Promise never gets here
}
function rejected(error) {
  // error will be Typeerror exception from foo.bar()
}
// that JS exception from foo.bar() becomes a Promise Rejection that we can catch and respond to
// it effectively solves another potential zalgo moment, whicch errors could create synchronous reaction and anything within Promise creation becomes an Asyn action thus reducing race condition immensely
// what if a Promise is fullled but there's a JS exception during observation of it
let p = new Promise((resolve, reject) => resolve(42));
p.then(fullfiled, rejected);
function fullfiled(msg) {
  foo.bar();  //JS exception
  console.log(msg);  //it never gets here
}
function rejected(err) {
  // never gets here either!!
}
// it did seem like exception from foo.bar() did get swallowed, but it didn;t, cause there is something more to it, which is why we've failed to listen for it
// p.then(..) call itself returns an another promise and that promise will be rejected with TypeError exception
// why couldn't it just call rror handler defined there, because it would have been a violation of Promise construct, as P is already resolved and thus immutable and can't be chaanged to rejection when observing p's resolution
    // Trustable Promise
// as we've noticed that callbacks aren't gone from Promise rather where callback is passed to, instead of passing a callback into foo(..) we get something called Promise back from it and we pass callback to that Promise instead
// why is Promise any more trustable than callbacks, isn't it just notion whrere Promise is already trusted thus we take this word for it
// Promise has a solution for it as  well included in ES6 Promise API, within Promise.resolve()
// when paassed in with immediate or non async values in a Promise.resolve() it will give us a Promise back with thatt valu as fullilment
let p1 = new Promise((resolve,reject) => resolve(42));
let p2 = Promise.resolve(42);
// if pass a Promise to Promise.resolve() we get same Promise back
let p1 = Promise.resolve(42);
let p2 = Promise.resolve(p1);
p1 === p2  // true
// even more importantly if we pass along a non thenable value to Promise.reolve() it will try to unwrap until a concrete final non-Promise like value is extracted, as Promise.resolve() truns it into a Promise itslef
let p = {
  then: function(cb) {cb(42);}
}
// this works OK but only by chance!!
p.then(function fulllfiled(val) {console.log(val);}, function rejected(err) {/*never runs */})
// `this p is thenable but it's not a genuine Promise, it's reasonable as most will be, what if get something like this following
let p = {
  then: function(cb, errCB) {
    cb(42);
    errCB("muhahaha");
  }
};
p.then(function fullfiled(val) { console.log(val); }, function rejected(err) {/* it shouldn't have run*/console.log(err); /* muhahaha */ })
// as we can see p is not a Promise but behaves as if so, solution to that is Promise.resolve() will ensure it's a promise no mater what, so that we can trust, and if it's a Promise already we get that back so trusting either ways
// don't just do this, when in doubt
foo(42).then(v=>console.log(v));
// instead do this, when in doubt
Promise.resolve(foo(42)).then(v=>console.log(v));
// Promise.resolve() is an easier way to normalize that function call into a wellbehaving async task, thus avoiding Zalgo makes much more better code

// Trust Built
// Promises are a pattern that arguments callbacks with trustable semantics
// so that behavior is more reasonable and reliable by inverting Inversion of Control of callbacks
// we place control with a trustable system as Promises that was desgined to bring sanity to asynchronous coding

// Chain Flow
// Promises are not just a mechanism for this-then-that, it's a building blok, we can string along multiple Promises together to represent a sequences of async steps
// key to making this work is built on two behaviors intrisnsic to Promises
    // everytime we call then() ona Promise, it creates and returns a new Promise which we can chain
    // whatever value is returned from then() call's fullfilment callback's first parameter is automatically set as fullfilment of chained Promise from this point
// let's understand what that means and then we'll look into it how that helps us create async sequences of flow control
let p = Promise.resolve(21);
let p2 = p.then(v=>{
  console.log(v); //21
  return v*2; // returns p2 with value of 42
});
p2.then(v=>console.log(v)); // prints 42
// using chaining them together
let p = Promise.resolve(21);
p.then(v=>{
  console.log(v);
  return v*2;
}).then(v=>console.log(v));
// first then() is first step in this sequence, and next then() as next step and this could go so on and so forth by chainning off a previos then()
// even if any of our step is another async calls, not just an immediate return statement and might require to wait before moving on to next, Promise.resolve() by definition solves that problem
// same sort of unwrapping happens if we return a thenable or Promise from fulfillment or rejection handler
let p = Promise.resolve(21);
p.then(v=> {
  console.log(v);
  // creates and returns Promise
  return new Promise((resolve,reject)=>resolve(42));
}).then(v=>console.log(v));
// event though we wrapped up 42 in a Proomise it stilll got unwrapped as a fulfillment of chained Promise such that next then() recieves value of 42 from that, also same goes with asynchronous calls as well
let p = Promise.resolve(21);
p.then(v=> {
  console.log(v);
  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve(v * 2), 2000)
  });
}).then(v=>console.log(v));
// that's incredibly powerful tool, now we can construct a sequence of however many async steps as we want,  and each steep can delay next or not as necessary
// if we dont explicitly return value in chained Promise call, it will get "undefined" as value but still will be chained together, each Promise resolution is thus a signal to proceed to next step
// to further chain illustration, let;s generalize a delay promise cration into a utility we can reuse for multiple steps
function delay(time) {
  return new Promise((resolve,reject)=> {
    setTimeout(()=>resolve, time);
  });
}
delay(110)
.then(()=> {
  console.log("STEP 2 after 110ms");
  return delay(200);
}).then(() => {
  console.log("STEP 3 after another 200ms");
  return delay(44);
}).then(() => {
  console.log("STEP 2 after another 44ms");
  return delay(56);
}). then(() => {
  console.log("STEP 2 after another 56ms")
})
// technically there are two promises in those interchanges, first 200ms-delay promise and chained promise that preceding then() chains from, but it's easier to picture them as a single entitiy for simplicity
// Promise-aware ajax
function request(url) {
  return new Promise((resolve,reject) => {
    // ajax() callback should be our Promise resolve() function
    ajax(url,resolve)
  });
}
// in action using above
request("some.url.1").then(res => {
  return request("some.url.2?v="+res)
}).then(res => console.log(res));
// after creating first request() with first url and chained off that returned promise with then()
// once reponse come back from preceding request(), here we constructed our second request url response coming from first call and then using a second request() there so that in next then() call we get value from it
// Promise chain is not only a flow control that expresses a multistep async sequence, it also acts as a message channel to propagate messages from step to step
// what if something went wrong in Promise sequence, an error exception is on a per person basis, whicch means it's possible to catch such an error at any point in chain, catching sorts of reset sequence back to normal at that point
request("some..url.1")
.then(res => {
  foo.bar();  // undefined error
  // never runs
  return request("some.url.2?v="+res);
}).then(
  res => {/*never runs*/},
  err=> {
    console.log(err); // TypeError from foo.bar()
    return 42;
}).then(msg => console.log(msg)) // prints 42
// when errror occurs in step 2 rejection handler in sttep 3 catches it and returns value of 42 which later on prints in step 4 as such, and now back in fulfillment state
// when returning a Promise from fulfillment handler it might be delayed same goes for error handlers too
// if we call then() on a promise and only passed a fulfillment handler and assumeed rejection handler is substituted
let p = new Promise((resolve, reject) => reject("oops"));
let p2 = p.then(function fulfilled() {
  // never runs
  },
  // assumed rejection handler if ommitted or anyother valuee is passed instead
);
// p2 is getting simply rethrown error from first chain, and will continue to propaget along chain until an explicitly defined rejection handler is encountered
// if a proper valid function is not passed as fulfillment handler parameter to then(), there's also a default handler substituted
let p = Promise.resolve(42);
p.then(
  // assumed fulfillemnt handler, if omitted or anyother non function value passed, v=>v
  null,
  err => {
    // never runs
  }
);
// default fulfillment handler simply passes whatever value it recieves along to next step(Promise)
// then(null,err=>..) pattern only handling rejections, if any, but letting fulffillments pass through, also has a shortcut then(err=>..)
// intrisic behaviors of Promises that enable us chaining fllow control
// <> a then() call against one Promise automatically produces a new Promise to return from that call
// <> inside fulfillment/rejection handlers, if you return a value or an exception is thrown, that new returned (chainable) Promise is resolved accordingly
// <> if fulfillement or rejection handler returns a Promise, it is unwrapped, so whatever it's resolution is will become resolution of chained Promise returned from current then()
// Prommises normalize asynchrony and encapsulates time dependent value state, that is what lets us chain them together in such useful way of flow control
// certainly sequential expressivenes of chain is big improvment over tangled mess off callbacks, but there is still a fair amount of then() and handler functions to wade through

// Terminology: Resolve, Fulfill and Reject
let p = new Promise((x,y) =>{
  // x() is for fulfillemnt
  // y() is for rejection
})
// first parameter is usually used to mark Promise as fulfilled, and second always marks promise as rejected
// words that we use naming those handler unctions can not only affect how we think about code but also how other devlopers will think about it, thinking wrongly is surely going to be worse than spaghetti callback alternatives
//  it is customary to use resolve() and reject() for those two handler functions respectively, event though reject() seems very starightforward but resolve() can get tricky sometimes, as it is fulfilling a Promise, why not use fulfill() instead
let fulfilledPr = Promise.resolve(42);
let  rejectedPr = Promise.reject("oops");
// fulfilledPr gets non thenable value, where rejectedPr gets  reason "oops"
// now lets see why resolve() is unambiguous and mmore accurate, if used explicitly in a context that could result in either fulfillemnt or rejection
let rejectedTh = {
  then: function(resolved,rejected) {
    rejected("oops");
  }
};
let rejectedPr = Promise.resolve(rejectedTh);
// Promise.resolve() is a good accurate name for API method, because it can result in ither fulfillment or rejection
// first callback parameter of Promise constructor will unwrap either a thenable, identical to Promise.resolve(), or a genuine Promise
let rejectedPr = new Promise((resolve,reject) => resolve(Promise.reject("oops")));
rejectedPr.then(()=>{/*never runs*/}, err => console.log(err)) //  prints "oops"
// we can see resolve() is mucch more appropriate name for first callback parameter of Promise() constructor
// reject() does not do unwrapping ways that resolve() does, if we pass a Promise/thenable value to reject() that untoucched value will be set rejection reason, a subsequent rejection handler would recieve actual Promise/thenable not underlying immediate value
// it's been suggestd to use fulfilled() and rejected() to be name as then() callback parameters respectiively
function fulfilled(msg) {console.log(msg)}
function rejected(err) {console.log(err)}
p.then(fullfiled, rejected);
// first prameter to then(), is unambiguously always fulfillment, so there is no duality of resolve terminology, ES6 use onFulfilled() and onRejected() to label those two callbaks, so they are accurate terms

// Error Handling
// synchronous way error handling with try..catch doesnt work with asynchronous code pattern
// even though error first ppatten from callbacks  for error handling is async capable but it doesn't compose well at all, with  mutipple levels of error first callbacks woven togther will inevitably lead to perils of callback hell
// error handling in Promise using rejection handler passed to then() is a lot more cleaner way of doing such async operations
// Promises don't use error first callback rather uses "split callbacks" style, where one for fulfillment and other for rejection
let p = Promise.reject("Opps");
p.then(
  function fulfilled() {
  // never runs
  },
  function rejected(err) {
    console.log(err); // Opps
  }
);
// while this patern seems make fine sense on surface, nuances of Promise error handling are often bit more difficult to fully grasp
let p = Promise.resolve(42);
p.then(
  function fulfilled(msg) {
    // numbers dont have string function, so it will throw an error
    console.log(msg.toLowerCase());
  },
  function rejected(err) {
    // it never gets here!!
  }
);
// as P is resolved already, error thrown in p.then() won't be able to change P is alresolved value as it becomes immutable to other chains
// but can be caught in any subsequent then() class rejection handler, as current then() will return an Error will be caught by any rejection handler there of in chain
// if we use Promise API in an invalid way and an error occurs that prevents proper Promise construction, then result will be an immediately thrown exception, not a rejected Promise
// we can;t get a rejected Promise if we dont use Promise API validly enough to actually construct a Promise beforehand

// Pit of Despair
// it's phenomenon where accidents are punished and we have try harder to get it right, but rather try too create a "pit od success" where we have to try harder to fail
// Promise error handing is unquestionably "pit of despair" design, by design it assumes we want any errors to be swallowed by Promise state, and when failed in observing that error dies in obscurity, usually despair
// to avoid loosing an error go silenced or discarded Promise, developers have claimed that having catch() at end of chain woud have handle that issue
p = Promise.resolve(42);
p.then(
  function fulfilled(msg) {console.log(msg.toLowerCase())}
).catch(errorHandler);
// looks like that solved it right, but whaat if errorHandler itself has an error that would go unobserved and unattended, sticking another catch() and of chain wouldn't necessarilty resolve that but  will reduce errors going unnticed for sure, still there remains a possiblity of any unattended errors

// Uncaught Handling
// it's not an easy problem to solve completely, there are ways to approach this that many would say better
// some libraries have added methods for registering a "global unhandled rejection" handler, which would be called instead of a globally thrown error, but their solution for how to identify an error has ambiguity in it and thus remaains possibility of remain "uncaught"
// another common suggestion is that Promises should have a done(..) added to them, which essentiallly marks Promise chain as "done", doesn;t create and return a Promise, so it's not wiredup to report problems to a chained Promise that doesnt exist, it ratheer throws a global uncaught error in console
p = Promise.resolve(42);
p.then(
  function fulfilled(msg) {console.log(msg.toLowerCase())}
).done(null, errorHandler) // if errorHandler caused it's own exception, it would be thrown globally here
// this might sound more attractive than never ending chain or arbitary timeouts, but it's not a part o ES6 standard, it's ar way off from being reliable and ubiquitous solution
// browsers have a unique capability that our code does not have, they can for sure track any Promise objects, whenever they get garbage collected if they have a rejection in them browsers can report in console confidently, though support is incomplte at best until 2018ish

// Pit of Success
// this following is just theoritical, as in how Promises could be someday changed to behave,  it shuld be somtthing more superior to what we currently have
// <> Promises could default to reporting any rejection in console on next Job or event loop tick, if no error handler has been registered for Promise at that time
// <> for cases where a rejected Promise would hold onto its rejected state for an indefinite amount of time before observing
// if a Promise is rejected, it defaults noisily in console rather defaulting silently, we might be ablee to opt ouut of that reporting implicitly bby registering a Error handler, or Explicitly using defer(), in either case we would be able to control false positives
p = Promise.reject("oops").defer();
// foo() is promise aware
foo(42)
.then(
  function fulfilled() {
    return p;
  },
  function rejected(err) {
    // handle foo(..) error here
  }
);
// as we can see in Promise creation we used defer() for rejection, which woulld mean it would wait a while to use or observe it rejection, thus no global reporting, defer() simply return same prommise for chaining purposes
// promise returned from foo(..) gets an error handler attached right away, so implicitly opted out and no global reporting for it occurance either
// but promise returned from then(..) call has no defer or errorHandler attahed so if it rejects from either resolution handler, it will be reported to console as an uncaught error
// this design is a pit of success, by default all errors are ither handled or reported, what alll developers would expect, unless we defer it in a Promise and left un observed than it's on us but will be hard thing to miss

// Promise Patterns
// there are Promise patterns other than "Sequence", these patterns serve to simplify expression of async flow control, which makes our code reasonable and more maintainable
// <> Promise.all([..])
// <> Promise.race([..])

// Promise.all([..])
// it's about doing two or more steps concurrently/parallel, in classic programming terminology a "gate" is a mechanism that awaits oon two or more parallel/cooncurrent tasks to complete before continuing, in Promise API we call this patteren all([..])
p1 = request("some.url.1");
p2 = request("some.url.2");
Promise.all([p1,p2]).then(
  msgs => {
    return request("somme.url.3?v="+msgs.join(","))
  }
).then(msg=>console.log(msg));
// Promise.all([..]) expects an array, consisting generally of Promise instances, promise returned from it will recieve a fulfillment message for all those Promises from that array
// array of valuees thaat passed into Promise.all([..]) can include Promises or even immediate values, each value is essentially went through Promise.resolve() to make sure it's a genuine promise
// an immediate value will be normalized ito a Promise, if that array is empty main Promise is immediately fulfilled
// main promise returned from Promise.all([..]) will only be fulfilled when all it's constituent promises are fulfilled, if any of them is rejected main Promise.all([..]) is also rejected, discarfing all results from other promises, always attach a rejection/error handler to every promise and also promise that's comes from Prommise.all([..])

// Promise.race([..])
// sometimes we only want to respond to first promise to cross finish line and letting other promises fall away,  this patern is classically known as "latch" but in Promies it's called "race", "race" is not "race condition", which is a bug and should always be avoided
// Promise.race([..]) also expects an array, containing one or more Prommiss or thenables or immediate values, vn though immediate values doesn't really fit into "race" in practical sense, as first of those immediatee values will be winner
// Promise.race([..]) will fulfill if and when any promise resolution is a fulfillment, and it will reject if and when any Promise reolution is rejection
// a "race" requires at least one "runner", so when an empty array is passed , main Promise.race([..]) will never resolve, so never leave an empty array to Promise.race([..])
p1 = request("some.url.1");
p2 = request("some.url.2");
Promise.race([p1,p2]).then(
  msg => {
    return request("somme.url.3?v="+msg)
  }
).then(msg=>console.log(msg));
// as only one proomise wins,  fulfillment value is a single message, not an  array as it was for Promise.all([..])

// Timeout Race
// Promise.race([..]) can be used to express "promise timeout" pattern
Promise.race([
  foo(),
  timeoutPromise(2000)
]).then(
  function() {/* foo() fulfiled in time */},
  function(err) {/* either foo() didnt finish in tim or rejected, inspect "err" to know */}
);

// Finally
// Promises cannot be cancelled,so they can only be silently ignored
// finally() callback in a Promise aalways gets called when a promise resolves and allows us to specify any clean up is necessary,  avaiilable from ES7+
p = Promise.resolve(42);
p.then(something)
.finally(cleanup)
.then(another)
.finally(cleanup)
// finally() still creates and returns a new Promise to keep chain going, aand if cleanup() also returns a Promise we could have potntial unhandled rejections
// we could use a static helper utility which wil let is observe without interfering resolution of a Promise
// polyfil safeguard
if(!Promise.observe) {
  Promise.observe = function(pr,cb) {
    // side observe "pr" resolution
    pr.then(
      function fulfilled(msg) {
        // schedule callback as async
        Promise.resolve(msg).then(cb);
      },
      function rejected(err) {
        // schedule callback as async
        Promise.resolve(err).then(cb);
      }
    );
    // return original Promise
    return pr;
  };
}
// using that above snippet
Promise.race([
  Promise.observe(
    foo(),
    function cleanup(msg) {
      // cleanup after foo(), even if it didnt finish before time
    }
  ),
  timeoutPromise(2000)
]);
// Promise.observe() helper is just an illustration off how we can observe completions of Promises without interfering with them, just be sure Prommises are not just silntly ignored by accident

// Variations on all([..]) and race([..])
// while native ES6 Promises come with built in Promise.all([..]) and Promise.race([..]), there are several other commonly used patterns availablee on those variations
// <> none([..]) is like all([..]) but fulfillment and rejections are transposes, all Promise needs to be rejected,, rejections become fulfillment value on those semantics
// <> any([..]) is like all([..]), but it ignores any rejections, so just one of those Promises needs to be fulfilled instad of all of them
// <> first([..]) is like a race with any([..]), where it ignores any rejections and fulfills as soon as first Promise fulfills
// <> last([..]) is like first([..]) except it allow latest fulfills to be a winner
// some promise abstraction libraries provide these, but we could also define them ourselves as well using mechanics of Promises, such as race([..]) and all([..])
// let's look at how we could defie first([..]) by ourselves
// polyfilll safe guard check
if(!Promise.first) {
  Promise.first = function(prms) {
    return new Promise((resolved, reject) => {
      // looping through all promises
      prms.forEach(pr=>{
        // normailize Promises
        Promise.resolve(pr)
        // by definition whichever finishes first wins
        .then(resolved)
      });
    }).catch(err => {/*something's wrong, look error */});
  };
}
// though that above implementation of first([..]) doesn't really haandle any rejections so if all of those promies are rejected that would simply hang, that's using catch should reduce that probablity of hanged if all goes as intended

// Concurrent Iterations
// sometimes we might want to iterate over a list of Promises and performs some task against all of them, which can be easily done using synchronous array methods
// if task is however async or/can run concurrently we can use async version of these utilities
// lets consider an asynchronnous map(..) utility that takes an array of promises/else along with a callback function to preform against each promises
// utility method map(..) itself returns a prmoise whose fulfillment value is an [array] that holds same mapping order for aasync fulfillment from each promise array task
// polyfill safe guard check
if(Promise.map) {
  Promise.map = (prms, cb) => {
    //  new Promise that awaits for all mapped promises
    return new Promise.all(
      // regular arr.map() turns [prms] into an array of Promises
      prms.map(val => {
        return new Promise((resolve,reject) => {
          cb(val, resolve);
        }).catch(err => {/* something's wrrong, look error */});
      })
    );
  };
}
// in that implementation we can't signal asyn rejection outside [prms].map(..) returning Promises
// let looks at it from Promises perspective rather that just [prms] simplee array values
p1 = Promise.resolve(21);
p2 = Promise.resolve(42);
p3 = Promise.reject("oops");
p4 = Promise.resolve("oops");
// those Prommise vslus are both in list of promise array's and Promises thmselves
Promise.map([p1,p2,p3,p4], function(pr, callbackDone) {
  // making sure of Promise, by normalizing it ofcourse
  Promise.resolve(pr)
  .then(
    // extract value from it
    function(v){
      // v(callbackDone(v*2));
      callbackDone(v*2);
      
    },
    // // or map to Promise rejection message 
    callbackDone
  ).catch(err => {/* something's wrong, look error */})
}).then(vals => console.log(vals));

// Promise API recap
  // <> new Promise(..) constructor
  // Promise constructor must be used with "new" and provided with a callback function that is called synchronously/immediately
  // that callback functon will have two function callbacks that act as either fulfill(e.g. resolve()) or rejection(e.g. reject()) for Promise
  let p = new Promise(function(resolve,reject) {
    // resolve()  // to resolve that promise
    // reject()  // to reject that promise
  });
  // reject() simply rejects it whereas resolve() can either fulfill or reject it, depending on what it's passed
  // if resolve() is passed an immediate, non promise, non thenable value then Promise is fulfilled with that value
  // but if resolve() is passed a genuine Promise or thenable vallue, that vallue is unwrapped recursively and whatever it's final resolution or state is, will be adopted by Promise
  // <> Promise.resolve() and Promise.reject()
  // a shortcut for creating an already rejected Promise is Promise.reject(..), basically both of these following Promises are rejected
  let p1 = new Promise(function(resolve, reject) {
    reject("oops");
  })
  let p2 = Promise.reject("oops");
  // Promise.resolve(..) is used similarly as Promise.reject(), however resolve unwraps thenable value, so Promise returned adopts final value of thenaable being passed in, which could eeither be fulfillment or rejection
  let fulfilledTh = {
    then: function(cb) {cb(42);}
  };
  let rejectedTh = {
    then: function(cb, errCB) {
      errCB("oops");
    }
  };
  let p1 = Promise.resolve(fulfilledTh); // fulfilled Promise
  let p2 = Promise.resolve(rejectedTh);  // rejcted Promise
  // Promise.resolve() doesn;t do anything if a genuine Promise is passed in, it just retuns value directly
  // so there's no overhead to calling Promise.resolve() on values that we dont know nature of going to be, if it happens to be a genuine Promisee or immediate value
  // <> then(..) and catch(..)
  // each Promise instance not Promise API namespace has then(..) and catch(..) metthods, which allows us to register of fulfillment and rejection handlers for Promise
  // once Promise is resolved either of these handlers will be called but not both, and will also be called asynchronously
  // then(..) takes one or two parameters, first being fulfillment and second for rejection callback
  // if either is omitted or is otherwise passed in as a non function value, default callback is substituted respectively
  // default fulfillment callback simply passes message aalong, while rejection callback rethrows error reason it recieves
  // catch() takes only rejection callback as a parameter and automatically substitutes default fulfillment callback, equivalent to then(null,..)
  p.then(fulfilled);
  p.then(fulfilled, rejected);
  p.catch(rejected);
  p.catch(null,rejected);
  // then(..) and catch(..)also creates and returns a new Promise, which can be used for Promise chain flow control
  // if fulfillment or rejection rethrows an exception, returned Promise is rejected
  // if either callback returns an immediate, non Promise, non thenable value, that is set as a fulfillment value for returned Promise
  // if fulfillment handler specifically returns a Promise or thenable value,, that value is unwrapeed an becomes resolution of returned Promise
  // Promise.all([..]) and Promise.race([..])
  // these static helpers Promise.all([..]) and Promise.race([..]) both create a Promise as their returned value
  // resolution of that Promise is dependent or controlled by array of promises being pased in
  // for Promise.all([..]) all promises we pass in must be fulfilled for returned Promise to be fulfilled, if any of those promises is rejected main returned promise is immediately rejected as well, discarding results of any of other promises
  // for fulfillment we receive an array of all passed promises fulfillment values
  // for rejection, we just recieve first promise to reject and it's reason for it
  // this pattern is called a "gate", all must arrive bfore gate opens
  // for Promise.race([..]) only first promise to resolve, either fulfillment or rejection, wins, and whatever that resolutions is, so becomes resolutions for returned promise as well
  // this pattern is classically known as a "latch", which means first one to open latch gets through
  let p1 = Promise.resolve(42);
  let p2 = Promise.resolve("hello world");
  let p3 = Promise.reject("oops");
  Promise.race([p1,p2,p3]).then(msg => console.log(msg)); // 42
  Promise.all([p1,p2,p3]).catch(err => console.log(err));  // oops
  Promise.race([p1,p2]).then(msgs => console.log(msgs));  // [42, hello world]
  // be cautious, if an empty array is passed to Promise.all([..]) it will fulfill immediately but Promise.race([..]) will hang forever amd never resolve
  // Promise API is pretty simple and straightforward, it serves  at least very basic of async scenarios and a good place to start when refactoring from callback hell to something better

// Promise Limitations
  // <> Sequence Error Handling
  // limitations of how Promises are, how they chain, specefically creates a very easy pitfall where an error in a Promise chain can be silently ignored accidentally
  // there is something else to consider with Promise errors, as Prommise chain is nothing more than it constituent promises wired together
  // there's no entity to refer to entire chain as a single thing, which means ther's no external way to observe ny errors tat may occur
  // if we construct a Promise chain that has no error handling in it, any error anywhere in chain will propagate indefinitely down this chain, until it is observed by registering a rejection handler at some step
  // in this specefic case, having a rejection handler registered, will notify of any propagated errors
  let p = foo(42).then(step2).then(step3);
  // although it might seem sneakingly confusing, p here doesn't point to first Promise but rather from last promise, as in step3 call
  p.catch(errorHandler);
  // if any of those step in chain does their own error handling errorHandler() wont be notified
  // <> Single Value
  // promises by definition only have a single fulfillment value or rejection reason, it might seem good enough but in sophisticated scenarios it might be limiting
  // typically creating a wrapper such as array or object to contain these multiple messages, but it can be wuite tedious and akward to unwrap messages with every single step of Promise chain
  // <> Splitting Values
  // situations like those as described in Single Values could/should be a signal to decompose this problem into two or more Promises
  // lets consider foo() is producing two values asynchronously
  function getY(x) {
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve( (3*x) - 1), 101);
    });
  }
  function foo(bar,baz) {
    let x = bar * baz;
    return getY(x).then(y => {
      // wrap both values
      return [x,y];
    });
  }
  // using it
  foo(10,20) .then(msgs => {
    let x = msgs[0];
    let y = msgs[1];
    console.log(x,y); // 200, 599
  });
  // lets refactor foo() what it returns so  hat we dont have to wrap x and y into a single array vaaue o transpport through one Promise, instead we can wrap  each value into its own promise
  function foo(bar, baz) {
    let x = bar * baz;
    // return both promises
    return [
      Promise.resolve(x),
      getY(x)
    ];
  }
  // using it
  Promise.all(
    foo(10,20)
  ).then(msgs => {
    let x = msgs[0];
    let y = msgs[1];
    console.log(x,y); // 200, 599
  });
  // even though syntactically speaking choosing Promises over arrays of values not uch of an improvement, but this approach resonates with Promise design theory
  // <> Unwrap/Spread Arguments
  // those let x = .. and y = .. asignments are still akward overhead, but we can use helper utility to overcome that
  function spread(fn) {
    return Function.apply.bind(fn,null)
    // return Function.prototype.apply.bind(fn,null)
  }
  Promise.all(foo(10,20))
  .then(spread((x,y)=>console.log(x,y)));
  // even though it seems neat but ES6 has an even better  answer for us, aray destructuring asignment
  Promise.all(foo(10,20))
  .then(msgs => {
    let [x,y] = msgs;
    console.log(x,y);
  });
  // or even better function parameter destructuring
  Promise.all(foo(10,20))
  .then(([x,y]) => console.log(x,y));