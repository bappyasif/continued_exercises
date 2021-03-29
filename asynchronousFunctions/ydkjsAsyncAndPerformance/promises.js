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
// callback Never being calling
