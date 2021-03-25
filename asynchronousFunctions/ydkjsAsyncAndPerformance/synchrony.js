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
