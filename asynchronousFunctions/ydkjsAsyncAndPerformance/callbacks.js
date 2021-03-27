// callbacks are by far most common way of hangling and managing asynchrony in JS, call back is most fundamental async pattern in this language

// continuations
// callback function wraps or encapsulates continuation of program

// Sequential Brain
// we tend to switch back and forth between mutiple tasks in rapid succession, simultaenuously progressing on each task in tiny but fast little chunks
// we do it so fast that to outside world it might even seem like we are doing these things in parallel, which sounds like async evented concurrency, event loop queue is kind of modeled after our brain

// Doing Versus Planning
// there's a big observable differencce between how we plan various tasks and how our brain acts on those tasks
// even though at an opertions level our brain seems to be more likely to be aligned with async evented processes
// whereas, we seem to plan out our tasks in a sequential, synchronous way
// at functional level our brain is good at fast context switching among processes, and appearing to be working simultaenuously

// Nested/chained callbcks:
listen("click", function handler(evt) {
  setTimeout(function request() {
    ajax("some.url", function response(text) {
      if (text === "hello") {
        handler();
      } else if (text === "wworld") {
        request();
      }
    });
  }, 200);
});
// this kind of chained/nested callbacks are also known as "callback hell" or "pyramid of doom" due to its side facing triangular shaped indentation
// callback hell actually hs nothing to do with nesting/chaining callbacks, it has far deeper reason than that
// there's often more noise cluttering to maneuver tp make a sense of it all as we jump from one function to another, it's not an impossible task  but certainly requires a lot of practice to cope up with this way of thinking
// let's see if nesting/chaining is what making async flow so hard to process with refactoring of above code without using nesting
listen("click", handler);
function handler() {
  setTimeout(request, 200);
}
function request(text) {
  ajax("some.url", response);
}
function response(text) {
  if (text === "hello") {
    handler();
  } else if (text === "wworld") {
    request();
  }
}
// even though it looks lot readable, it still doesn't yet out of "callback hell"
// as we go through this  cnippet sequeentially we'd see we'd have to skip/jump from functions to function to see sequence flow
// all of those issues can be manually hard coded into each step like before but that becomes more repetitive and not reusable in other steps or async flows
// due to brittle nature of hardcoded callbacks is often less effecient, eveen with error hadnling it becomes  so convoluted that it becomes hard to maintain or update when required
// and thats what is "callback Hell" all about, nesting, indentation is just red herring or a tell tell sign of it to be aware of
// notion hre is thhat our sequential prone brain planning behaviors just dont map well onto callbak oriented async code, that's major deficiency to articulate about callbacks, we have to practice to keep in sync with

// Trust Issues
// this mismatch between sequential brain planning and callback driven async JS code is only part of this problem with callbacks, there is something more deeper to be concerned about
// callback driven designs usually revolves around idea that sometimes ajax() function is used will be written by some thrid party which you have no control over
// also known as "invrsion of control" of your code that you expect that some utitlity is to be maintained by thrid party utility provider/s

// Tale of Five Callbacks
// let's construct a scenario wheere this notion becomes more abvious with some exggeration in illustration to make tthis point of "Iinversion of Control"
// say your ecommerce site's checkout page has a Sale tracker utility which is an async call, and code logic might look like following
analytics.trackPurchase(purchaseData, () => {
  chargeCreditCard();
  displayThankYouPage();
});
// everything's seems to be breezy enough right, what if this analytics code changes overtime causing unepected behavior tht you're not aware of
// you'll need  to have some sort of safe space around it so that even if third party utility callbacks doesn't cause any bad effects on your site, and following code can be somewhat a necessary perimeter around it to safekeep your processes
let tracked = false;
analytics.trackPurchase(purchaseData, () => {
  if (!tracked) {
    tracked = true;
    chargeCreditCard();
    displayThankYouPage();
  }
});
// seems like a good idea to put a "latch" to ensure access and closing it on way out, but what if callback is never gets called or called on too early or some other aspect of it which not yet been surfaced to consider, what then
// as we can see to we have to use adhoc logic around it to prevent any kind of misbehavior from any third party venodrs, to prevent your core work is not going to be hampered, thats how trust issues can be a big of a deal, and hellish this callback scenario can get if not handled properly

// Not Just Other's Code
// contemplate this idea for a moment then,, can you trust your own code base theoritically speaking
// most of us would try to use safe guards around our internal functions to act as defensive measures to reducce unexpected discrepencies
function addNumbers(x,y) {
    // + is overloaded with coercion, so need more safe guarding
    return x+y;
}
addNumbers("21", 21); //2121
// with defensive measure added
function addNumbers(x,y) {
    // ensure numerical only inputs
    if(typeof x === "number" && typeof y === "number") {
        return x+y;
    } else {
        throw Error("Bad Parameters");
    }
}
addNumbers("21", 21); //Error:"Bad Parameters"
// or safe but frindlier
function addNumbers(x,y) {
    // ensure numrical only input
    x = Number(x);
    y = Number(y);
    return x+y;
}
addNumbers("21", 21); //42
// these sort of safe gurding is fairly common, also known as "Trust But Verify"
// it's only fair that we take some preventive measures to safe gurad against any third party utility callbacks as well
// we should always mitigate logic to avert "inversion of control", there might be hidden bugs right now,, latent bugs are still bugs, hell indeed

// Trying to Save Callbacks
// there are several variations of callback to address some of those trust issues using split callbacks to have a better error handling
function succes(data) {
    console.log(data);
}
function failure(err) {
    console.log(err);
}
ajax("some.url", succes, failure);
// in this kind of designs often failure() error handler is optional and if not provided it'll swallow any errors
// this split-callback design is Promise API uses, there is another pattern callled "error-first-style" or "node-style"
// in that pattern, first argument is a single callback for erro object, when succeed this argument is empty/falsy and any subsequent arguments will be success data, but when error true usually nothing else is passed only that
function response(err,data) {
    // error?
    if(err) {
        console.log(err);
    } else {
        // otherwise success
        console.log(data);
    }
}
ajax("some.url", response);
// things to observe here, it haasn;t resolved majority of trust iissues being discussed rather it's worse because we may get both error, success or neither, so we still have to code around it
// what if callback is never being called, how to remedy that, we can use a timer function to ensure of that happening 
function timeoutify(fn, delay) {
    let intv = setTimeout(() => {
        intv = null;
        fn(new Error("Timedout"));
    }, delay);

    return function() {
        // timeout hasn't happened yet
        if(intv) {
            clearTimeout(intv);
            fn.apply(this, [null].concat([].slice.call(arguments)))
        }
    }
}
// using error-first-style, to use that utility function
function foo(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
ajax("some.url", timeoutify(foo, 200));
// there is another issue of callback getting called earlier before any critical process, utilities can be called synchronous or asynchronously
// that nondeterminism of callback is getting called synch/asynchronously is also known as "Zalgo"
// way around it is always calls callbacks Asynchronously even if it's right away on next event loop turn, so that callbacks predictably async
function result(data) {
    console.log(a);
}
let a = 0;
ajax("some.url", result);
a++;
// it'll be 0 or 1 deppepnding on async or not, that's why alwasys be asyncing soo that Zalgo doesn't stay loose
// a proof of concept for Asencify
function asyncify(fn) {
    let orig_fn = fn;
    intv = setTimeout(()=> {
        intv = null;
        if(fn) fn();
    },0);
    fn = null;
    return function() {
        // firing too quickly, before "intv" timer has fired to indicate async turn hsa passed
        if(intv) {
            fn = orig_fn,
            // add wrapper "this" to bind(..), call parameters, as well as currying any passed in parameters
            [this].concat([].slice.call(arguments));
        } else {
            // invoke original function
            orig_fn.apply(this,  arguments);
        }
    };
}
// to use asencify() we can use it like this
function result(data) {
    console.log(a);
}
let a = 0;
ajax("some.url", asyncify(result));
a++;
// whether ajax request is in cache and resolves to try to call callback rightaway or must be fetched and complete asynchronously, this code will always out put 1 over 0
// callbaccks cn do pretty much anything but it will have some bloated boiler plates, better pproach is here as well kno an Promise API

// Review
// callbacks are fundamental blocks of asynchrony
// our brain plans sequentially, single threaded semntic ways but callback flow is asynchronous,  nonsequential way which make reasoning but convoluted
// we need a way to synchronise asynchronous calls, as in sequential manner, likewise our brain does
// callbacks often suffer from "inversion of control" which induces trust issues that we need to be watchful of
// more adhoc logics are needed to overcome those trust issues and in turn it becomes harder to maintain if it wighs down for each callbacks
// we need a generalized solution too all of those trust issues that can be used as many callbacks as we create without any extra boilerplate overhead
// we need something btter than callbacks, likes of Promise and such
