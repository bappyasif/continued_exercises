// what Is a Promise
// lets look at conceptually first so taht we can understand wht promise is and how it works and why and all those nitty gittys

// Future Value
// once a transaction of Promise started, we get Future value from a request
// this future value is time independent and works as a placeholder
// once future value is ready, we can exchange value-promise for value itself
// we should also rememebr there is anotheer possiblity of value-promise could turn out ot be a failure, so we shall code around it, what to do then

// Values Now and Later
let x, y=4;
console.log(x+y);
// how to possibly reason about codes if either one or any of them might not be ready for operations
// if statement 2 relies on 1 to finish, there could be two options,statement 1 finished now, and evrything is fine or dint finish yet and it will fail
// using callback we can make sure that x+y should only continue when both values are ready for its operation otherwise wait until they does and add as soon as possible
function add(getX, getY,cb) {
    let x, y;
    getX((valX => {
        x = valX;
        if(y!==undefined) {
            cb(x,y);
        }
    }));
    getY(valY => {
        y = valY;
        if(x!==undefined) {
            cb(x,y);
        }
    });
}
// by using sync/async calls 
add(fetchX,fetchY, function sum(x,y) {
    console.log(x+y);
});
// here we treated both x and y as future values, it normalizes now and later such that we can rely on predictable outcome of add(..) operation
// to consistently handle both now and later, we make both of them later, all operations become async

// Promise Value
// now lets have a look at how we would handle it using Promise API instead fo callbacks
function add(xPromise, yPromise) {
    // Promise.all([..]) takes an array of prrimises and returns a new promise that awwaits on them to finsih
    return Promise.all([xPromise, yPromise])
    // when that promise is resolved considering in success, lets get values of x and y to add them together as inteneded
    .then(vals => {
        // vals are an array of values both x and y from prevoiously resolved promise
        return vals[0]+vals[1];
    });
}
// fetchX() and fetchY() return promises for their respective values, and may ready for now or later
add(fetchX(), fetchY())
// we get a promise back for sum of those values, now by chaining then we can get sum of that returned promises
.then(sum => console.log(sum));
// there are two layers of Promises in this snippet, each promises that pased into add(..) normmalizes behavior to be same regardles, that is they are async, time independent and future values
// second layer of promises are created using Promise.all([..]) and returns which we wait on them by calling then(..), when add() finishes we get value of sum and we can use it as we reuire
// just like fullfilment there could be another possiblity of rejection reason, and we can set it directly by program logic or it can result implicitly from a runtime exception
add(fetchX(), fetchY())
.then(
    // fullfilemnt handler
    sum => console.log(sum),
    // rejection handler
    err => console.log(err)
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
evt.on("completion", function() {
    // here we can do next step as intended
});
evt.on("failure", function(err) {
    // oops something went wrong
});
// foo(..) expressly creates an event subscription capability to return back calling code recieves and registers two event handler against it
// this inversion from normal callback oriented code should be notable here, instead of passing callbacks to foo(..), it returns an event capability "evt" which recieves callbacks, so it's an inversion of inversion of control, where we wanted to be in first place
// another important benefit is that mutiple separate parts of can code can be give this event listening capability, and thy all can be independent of each other and perform as they require after it's completion
let evt = foo(42);
let bar = (evt); // let bar() listens for foo(..) completion
let baz = (evt); // let baz() listens for foo(..) completion
// this uninversion of control enables a better separation of concern where bar(..) and baz(..)dont neeed to be invokved how foo(..) is called
// and similarly foo(..) doesnt need to know or care about whether bar(..) or baz(..) exist or not when foo(..) completes
// essentially this "evt" object is a nuetral third-party negotiation between separate concerns

// Promise Events
