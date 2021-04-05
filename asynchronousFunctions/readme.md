Javascfipt includes support for asynchronous functions so that it can continue functioning in background while rest of our code can happpen without blocking, before request gets completed, and the result is reflected accordingly.

Callbacks:
usual way of handling these kind of Asynchoronous request in code before Promise was introduced, and still are quite a lot used in some circumstances

A callback function is a function that passed into an another function as an argument, which is then invoked outside function to complete some kind of functionalities or routines.

callbacks is a convention that Javascript uses, there is no special keyworkd or thing called Callback ppersay, expceet it's a means of coding and passing function as parameters into another function.

function that uses callbacks take some time to produce a result, aynchronous or async just means "take some time" or "happens in future" but "not right now

eventhough they are useful in situations, such as downloading things,, readding ules, talking to databases, dom communication and so on, can get out of hand, especially when we need to chain several of them together in a specefic order, due to phenomenon known as Callback Hell.

    Callback Hell:
        cause: 
        when people try to write Javascript in a way where execution happens visually from top to bottom
        Javasript is different, in dealing with Asynchronous calls.

calling a normal function would mean, we can use it's return value rightaway, where as functions that are async and use callbacks don't return anything instantly, it might take some time to process tha request and get response from that server/api, and return us wiith some value so taha we can use in our code.

so process of handling them using callback is, we store snippet of code that should run after async request has a response, in a function, also known as Callback.

when we have a function that will have to wait for response to get, and gets a response and then subsequenttly runs callback function defined for it that would run after a response being recieved, they are most likely to end up in either Success or Error, while dealing wiht those asyn callbacks

biggest hurdle people have when trying to understand callbacks is understanding order of things executed as program runs, e.g handlePhoto(error, photo) is declared then downloadPhoto() is invoked and handlePhoto is passed in as a callback function and then you get a either a success or error response defined in handlePhoto()

callback function doesn't invoke itself, it woon't run until function enclosing it finishes doing it's task. (e.g.downloadPhoto())

things to notice here:
    callback function (e.g. handlePghoto()) is a way to store some routines that would run at a later time
    Order in which things happen does not read top to bottom, it jumps around based on when things complete

    Callback Hell:
    what causes: it happens due to poor coding practices
    how to fix it: just follow three rules:
        Keep code shallow
        modularize
        handle every single error
    
    to avoid callbacks hell: 
    most important aspect of avoiding callback hell is to move functions out of nesting, so that program flow can be more easily understood
    we can start bby moving functions around program or into a separate module when possible
    
    Some rules of thumb, for creating any modules:
    <> start moving repeatedly used code into a function
    <> when function gets bigger move them into another function and eexpose them using exports, so that we can use them in other modules
    <> if we have some code that can be used across multiple projects, it'lll be better to give its own readme, tests, package.json and publishing it into github or nom sounds like a good idea, benefits are endless
    <> a good module is small and focuses on a singlle problem and handles  it
    <> individual files in a module should not be longer than 150 lines of codes
    <> a module should not have more  than one level of nested folders, if it does, then chances are it's not doing a single thing only rather too many things
    <> sak more experienced coders to see examples of good modules until we have a good understandings of what a good module should look like, if it takes more than a minute to understand what's happenign in a module, probably it's not a very good module in that sense


Promises: there are multiple ways of dealing with asynchronous coding, Promise is one of such mechanism.

Async/Await: Asynchronous code can be become difficult to reason about when it has a of things going on, "async" and "await" are two keywords that can help us make asynchronous code readability mor like synchronous code, this helps keep our code cleaner while  keeping benefits of asynchronous code.

    Async Keyword
    <> "async" keyword lets Javascript eengine know that we are declaring an asynchronous function, this is required to use "await" inside any function
    <> when a function is declared with "async" keyword, it automatically returns a Promise
    <> returning in an "async" function is same as resolving a Promise, likewise throwing an error will reject Promise
    <> an important thing to understand is "async" functions are just syntactical sugar for Promises
    <> "async" keywordcan also be used with any  of those ways a function can be created, said differently, it is valid to use an "async" function anywhere we can use a normal function
    <> e.g.
        let asyncFunc = async () => {
            <!-- doing something asynchronous here -->
            return result;
        }

        anArray.forEach(async item => {
            <!-- doing something asynchronous here -->
            <!-- we could also use .map() here to return an array of promises to use with Promise.all([..]) -->
        })

        server.getPeople().then(async people => {
            people.forEach(person => {
                <!-- doing something asynchronous here -->
            })
        })
    
    "await" keyword
    <> "await" is pretty simple, it tells Javascript to wait for an asynchronous action to finish before continuing with function
    <> "await" is like a 'pause until its done' kind of a keyword
    <> "await" keyword is used to get a value from a function where we would normally use then(), instead of calling then() after asynchronous function, we would simply assign a variable to result using "await", then we can use that result in our code, as we would in a synchronous code

    Error Handling
    <> handling errors in "async" functions are very easy, Promises have catch() method for handling rejected promises, and since async functions just return a Promise, we can simply call that function and append a .catch() method to it
    <> e.g.
        asyncFunctionCall().catch(err => {
            console.log(err);
        });

        there is another way, mighty try/catch block, if we wanted to handle error directlyy inside "async" function, we can use try/catch just like we  would in a synchronous code

        async function getPersonINfo(name) {
            try {
                let people = await server.getPeople();
                let person = people.find(person => {
                    return person.name === name
                });
                return person;
            } catch(err) {
                <!-- handle if any error -->
            }
        }
    <> doing this can look messy but it's a very easy way to handle errors without appending .catch() after our function calls
    <> how we handle errors is upto us and which method we use is determined by how our code was written