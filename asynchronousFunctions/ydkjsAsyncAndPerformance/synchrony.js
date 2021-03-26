// before moving onto Asynchronous Javascript coding
// lets understand how asynchrony works in Javascript first

// a program in chunks
// most common unit of chunk is usually likely to be a function
// nuanced that new developer might face to understand is that "later" runnable code doesn't neecessarily runs after "now" runnig codes
// so tasks that are not completed "now" are going to be coompleted at a later time asynchronously, thus we will not have  a blocking behavior
let data = $.ajax("some-url");
console.log(data); // synchronously data is undfined, as it requires time to completet a request
// ajax requests dont complete syncchronously, which means ajax() function does not yet have any value to return back to callee to be asigned to "data" variable
// if ajax() could until response cme back then we could have proper data be assigned to "data" variable
// but asyn requests "now" and gets data "later", simplest way to wait for data to be available is to use a Callback function
ajax("some-url", function callbackFunction(data) {
    console.log(data)
});
// event though ajax() calls can be synchronous but it's a bad idea to follow through with, as this will lock browser UI and preventsusers from interactions, so it should always be avoided
function now() {
    return 21;
}
function later() {
    answer = answer * 2;
    console.log(answer);
}
answer = now();
setTimeout(()=> later, 1001); // 42
// as we can se now() chunks run rightaway where as later() runs at future time, so code becomes asynchronous

// Async Console
// console.* metthods are added by hosting environamnet but not JS, so different browsers and JS environment do as they please
let a = {
    idx: 1
}
console.log(a);
a.idx++;
// even though a snapshot fo "a" is shown before "idx" being incremented and thus modification didn't reflected for "a"
// but its possible this same code runnign in diffferent environment, where it felt like it needed to be delayed and defered  to be at background, and "increment" happened and "output" willl reflect accordingly
// it's a moving taarget, soo even though it's not "usual" beehavior but might get surfaced up in nvironment, use debug or serializing wiith JSON.stringify() that would stop it from happening so and force a snapshot

// Event Loop:
// JS engine itself usually has never done anything more than execute a single chunk off program when asked to 
// JS doesn't run in isolation,  it runs inside a hosting environment, such as a web browser and so on
// in alll environments of JS there is a common thread of exsecuting chunks of program over time, invoking "event loop"
// when a code makes an Async request, hosting environment then suspends current execution for now, when request async request has a response then resumes with a callback function assigned to it
// lets conceptualise eevent loop:
// eventLoop is an array and acts as a queue
let eventLoop = [];
let evt;
while(true) {
    // perform a single tick
    if(eventLoop.length > 0) {
        // get next event from eventLoop queue
        evt = eventLoop.shift();
        // now execute next event
        try {
            evt();
        } catch(error) {
            Error(error);
        }
    }
}
// these events are usually callback functions, it's taken off to be executed
// setTimeout() doesn't put into an eventloop,it sets up a timer and when it expires piushed into eventloop, so that in next availlable tick this callback will be called and executed
// other events that are not directly related to our specefic callback function in eventloop can be interleaved, and causing unexpected awaits time within in queue as well
// ES6 now specifies how eventloop works rather than just hosting environment, main reason for this is introduction of ES6 Promise

// Parallel Threading:
// "async" and "parallel" are quit different than each other, "async" is about mind this gap between now and then, where "parallel" is about happening simultaenously
// most common tools for parallel computing is "processes" and "threads", which executes independently and simultaenuosly on seperate processors or computers, but can share memory of a single process
// eventloop in contrast breaks it into chunks and executes them serially, disallowing parallel access and changes to shared memory
// "parallelism" and "serialism" can coexist in this form of cooperating event loops in separate threads
function later() {
    num = num*2;
    console.log("Life's Meaning: ", num);
}
// in a single threaded environment, nothing can interrupt  running thread
// for a parallel system, where two different threads are operating in same program can very likely to have an unpredictable behavior
let a = 0;
function foo() {
    a = a+1;
}
function bar() {
    a = a*2;
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// in a single threaded behavior, when foo() runs before bar() a will be 42 but in reverse a will be 41
// in a parallel environment this can get even more unpredictable, due to interleaving and usiing same resources for their executions, will result in a different outcome (e.g. 44 or 21)

// Run to Completion:
// because of JS is single threaded, once foo() starts running until it finishes itt will continue to run, also known as "atomic" or "run-to-completion" behavior
// because foo() can't be interrupted by bar() and vice versa, so only two possible outcome is eminent depending on which function runs first
// if threading were present and individual statements in foo() and bar() could be interleaved, number of possible outcomes would be numerous
// this function ordering "non-determinism" is also knownn as "race condition", because value of a and b are unpredictable

// concurrency:
// when two or more "processes" or "tasks" are executing simultaenuosly over same period, regardless of whether their individual constituent operations happen in parallel or not
// it can also be think of concurrency then as "process"-level or "task-level" parallelism as opposed to operation level parallelism(separate-processor threads)
// mutiple "processes" run concurrently but their individuaal events run sequentially on event loop queue
// single threaded event loop is one expression of concurrency

// Noninteracting:
// as two or more "processes" are interleaving their stepps/events concurrently within same program, they don't necessarrily need  to interact with eacch other i tasks are unrelated
// if they don't interact, nondeterminism is perfectly acceptable
let res = {};
function foo(results) {
    res.foo = results;
}
function bar(results) {
    res.bar = results;
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// even though foo() and bar() are concurrent and it's nondeterminate, but we'v constructed it such that they don't have to interact, they are acted independently
// this is not a "race-condition" bug, as code will always work correctly, regardless of their ordering

// Interaction
// more commonly, concurrent "processes" will by neeecessity interact, indirectly through scope and/or DOM
// when such interacctions will occur, we need to coordinate these interactions to prevent "race-conditions"
let res = [];
function response(data) {
    res.push(data);
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// concurrent "processes" are two response() calls that wiill be made to handle Ajax responses
// they can happpen in either-first order, there's a pretty good likelyhood of nondeterminism, which consequently is a "race-condition" bug
// be cautious about assumptions for these situations, it might be thaat task 1 is a database task, where 2 is fetching a static file
// even though it might be quite aparent that task1 is usually faster than taask2 but there is no real gurantee of what order responss willl arive back  in browser
let res = [];
function response(data) {
    if(data.url === "some.url.1") {
        res[0] = data;
    } else if(data.url === "some.url.2") {
        res[1] = data;
    }
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// regardless of which response gets back first, res[0] will always hold "some.url.1" results and res[1] will have "some.url.2" results, and thus eliminating "race-conditions" bug of nondeterminism
// some concurrency scenerios however are always broken, not jjust sometimes, without any coordinated intercation
let a,b;
function foo(x) {
    a = x * 2;
    baz();
}
function bar(y) {
    b = y * 2;
    baz();
}
function baz() {
    console.log(a+b);
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// in this exammple, first response will call baz() with an undefined value of b, but for next call this should be fine
// lets address this situation and try to coordinate this accordingly
let a,b;
function foo(x) {
    a = x*2;
    if(a && b) {
        baz();
    }
}
function bar(y) {
    a = y*2;
    if(a && b) {
        baz();
    }
}
function baz() {
    console.log(a+b);
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// by using a gate, we can ensure only when both values are available we'll open gate for baz()
// another concurrency interaction condition we may run into is sometimes called a "race" but more correctly called a "latch"
// it's ccharacterized by "only first one wins" behavior, here "nondeterminism" is acceptable, it's saying whoever finishes first is only winner
let a;
function foo(x) {
    a = x * 2;
    baz();
}
function bar(y) {
    a = x / 2;
    baz();
}
function baz() {
    console.log(a);
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// whichever of these response gets called on last, not only it will overwrite value of a and will have a duplicated call to baz()
// so we can coordinate this interaction with a simple latch, to let only first rsponse to through
let a;
function foo(x) {
    if(a === undefined) {
        a = x * 2;
        baz();
    }
}
function bar(y) {
    if(a === undefined) {
        a = x / 2;
        baz();
    }
}
function baz() {
    console.log(a);
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// by this way only first response will be passed through and next response will be ignored, as a will already have a value

// Cooperation
// another expression of concurrency coordination is called "cooperative concurrency"
// here focus isn;t much on interacting via value sharing in scopes thought it's still allowed
// goal here is to take a long running "process" and break it up into steps or batches so that other concurrent "processes" have a chance to interleave their operations into event loop queue
let res = [];
// response() recieves array of results from ajax call
function response(data) {
    // add into exixting array
    res = res.concat(
        // with a transformed array
        data.map(val=>val*2)
    );
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// if foo() gets called first, entire list willl be mapped all at once, what if it's a record of millions that can take a while to run
// while such a "process" is running, nothing else can happpen, including no other response() calls, no UI or user interactions of any sort
// so to make a more cooperatively concurrent system, that doesn't hog over eevent loop, we can process these results in "asynchronous batches", and they will take turn to let other waiting events to run
let res = [];
// response() recieves array of results from ajax call
function response(data) {
    let chunk = data.splice(0,1000);
    // add into exixting array
    res = res.concat(
        // with a transformed array
        chunk.map(val=>val*2)
    );
    // anything left to proccess?
    if(data.length > 0) {
        // async schedule next batch
        setTimeout(() => response(data),0)
    }
}
ajax("some.url.1", foo);
ajax("some.url.2", bar);
// we are processing chunks of max 1000 records, this way can have many subsequent "processes" to have their turn as interleaving event loop queue will give us much more responsive performance
// setTimeout(..0) is not technically inserting an diirectly ontto event loop queue, timer willl insert event at its next available opportunity

// Jobs
// as of ES6, there is a new concept of layer on top of event loop queue called "Job Queue"
// it's closely related  async behavopr with Promises, but meanwhile lets understand this conceptually
// we can pressume that its a queue that hangs off of every tick in event loop queue
// certain async implied actions that may occur during a tick of any event loop queue
// it will instead add an item, also know as "Job" to end of this current tick's Job queue
// or, to use a metaphor: event loop queue is like an amusement part ride, when finished we hae to go backk to end of line to ride again
// where as Job queue is like finishing a ride then cutting in line and geetying right back on
// a Job can also cause other jobs to be added to end of same queue, so possibly it could go on for indefinitely, thus starving other event in event loop queue to execute from
// Jobs are likes of which of setTimeout() hack but implemented in such a way to hav more well defined and guranteed ordering
console.log("A");
setTimeout(()=>console.log("B"), 0);
// theoritical "JOB API"
schedule(()=> {
    console.log("C");
    schedule(() => {
        console.log("D");
    });
});
// it would print ACDB rather ABCD as Jobs happen at end of current loop tick and timer schedules for next available event loop tick

// Statement Ordering
// order in which we express statements in our code is not necessarily same order as JS engine will execute them
let a,b;
a=10,b=30;
a = a+1;
b=b+1;
console.log(a+b) //42
// this code has no asynchrony intoo it, so it will be processed synchronously from top down manner
// JS engine might find a way to re arrange this to optimize runtime performance, behind scene of course
let a,b;
a=10;
a++;
b=30;
b++;
console.log(a+b); //42
// other examples where reordering could create observable side effects and thus must be disallowed
function foo() {
    console.log(b);
    return 1;
}
let a,b,c;
c = {
    bar() {
        console.log(a);
        return 1;
    }
}
a =10;
b =30;
a += foo();
b += c.bar();
console.log(a+b) //42
// JS engines could have done rearrangging someething like following
a = 10+foo();
b = 30+c.bar();
console.log(a+b);
// JS semantics thankfuly protects us from observable complier statements reordering
// it's still important to understand how source code is authored and how it runs after compilation

// Review
// a Javascript program is always broken into chunks and runs sequentially in response to an event
// whenever tthere arre events to run, vent loop runs until queue is empty
// at any given monet only one of those event can be processed from queue at a time
// concurrency is when two or more chains o events interleave over time, creating a simultaenuosly running effect
// it is often necessary to have some interaction coordination between concurrent "processes" to prevent "race conditions", in turns these processes can also be broken into chunks to allow other process interleaving
