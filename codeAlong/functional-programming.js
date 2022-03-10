// the programmer is always looking for ways to keep the complexity of their programs as low as possible. 
// An important way to do this is to try and make code more abstract
//  abstraction is more or less when you expect your audience to understand some basic knowledge of your concepts, and express them i a shorter or clearer way
// functional programming produces abstractions through clever ways of combining functions
// there are other propular approcahes for abstractions namely oject oriented programming
// snippet-01:
let print = val => console.log(val)
let printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) print(arr[i])
}

// snippet-02:
let forEach = (arr, action) => {
    for (let i = 0; i < arr.length; i++) action(arr[i])
}
forEach(['vers', 'lang', 'meer', 'weinig'], print)

// by making use of anonymous fuction, for loops actionable function can be written without being verbose
let sums = nums => {
    let total = 0;
    forEach(nums, (number) => total += number)
    return total;
}
let show = val => console.log(val)
show(sums([1, 2, 3, 4]))

// using more abstract (or 'higher level') constructs results in more information and less noise
// The code in sum reads 'for each number in numbers add that number to the total', instea of saying whole inner workings as well, which would be bit tedious and more verbose
// What forEach does is take an algorithm, in this case 'going over an array', and abstract it.
// what to do for each of these elements, are filled by functions which are passed to the algorithm function.
// Functions that operate on other functions are called higher-order functions. By operating on functions, they can talk about actions on a whole new level
// Higher-order functions can be used to generalise many algorithms that regular functions can not easily describe.
// Being able to write what we want to do instead of how we do it means we are working at a higher level of abstraction. 
// In practice, this means shorter, clearer, and more pleasant code.
// Another useful type of higher-order function modifies the function value it is given
let negate = func => {
    return x => !func(x)
}
let isNotNan = negate(isNaN)
show(isNotNan(2))
show(isNotNan(NaN))
// The function returned by negate feeds the argument it is given to the original function func, and then negates the result.
//  what if the function you want to negate takes more than one argument? You can get access to any arguments passed to a function with the arguments array, and can be used apply method
show(Math.min.apply(null, [5, 6]));

function negate02(func) {
    return function () {
        return !func.apply(null, arguments);
    };
}

// The sum function is really a variant of an algorithm which is usually called reduce or fold
let reduce = (combine, base, array) => {
    forEach(array, element => {
        base = combine(base, element)
    })
    return base
}
let add = (a, b) => a + b
let sum = nums => reduce(add, 0, nums)
show(sum([1, 2, 3, 4]))
// reduce combines an array into a single value by repeatedly using a function that combines an element of the array with a base value.

// Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it. Use reduce.
let countZeroes = nums => {
    let checkIfZero = val => val == 0 ? 1 : 0
    let counter = (total, element) => total += checkIfZero(element)
    return reduce(counter, 0, nums)
}
show(countZeroes([0, 1, 0, 1]))

// try01:
// let reduce02 = (checker, base, array) => {
//     // let count = 0;
//     // forEach(array, element => {
//     //     if(element == base) count++;
//     // });
//     forEach(array, element => checker(element, base))
// }

// let checkIfNumberZero = val => val == 0;

// let countZeroes = nums => reduce02(checkIfNumberZero, 0, nums)
// show(countZeroes([1,0,1,0]))

// Use of ternary operator can make some pieces of code much shorter. When the expressions inside it get very big, or you have to make more decisions inside the conditional parts, just using plain if and else is usually more readable.

// here is another version of that countZeros
let count = (checker, array) => {
    // let total = 0;
    // let combine = (total, element) => total + checker(element) ? 1 : 0
    // return reduce(combine(total, ), 0, array)
    // return reduce((total, element) => total + checker(element) ? 1 : 0, 0, array)
    return reduce(function (total, element) {
        return total + (checker(element) ? 1 : 0);
    }, 0, array);
}

let isEqualsZero = elem => {
    // return 0 == elem
    return x => x == elem
    // return function(x) {
    //     return x == elem
    // }
}

let countAllZeros = nums => count(isEqualsZero(0), nums)

show(countAllZeros([0, 0, 0, 0]))

// function count(test, array) {
//     return reduce(function(total, element) {
//       return total + (test(element) ? 1 : 0);
//     }, 0, array);
//   }

//   function equals(x) {
//     return function(element) {return x === element;};
//   }

//   function countAllZeroes(array) {
//     return count(equals(0), array);
//   }
//   show(countAllZeroes([0,0,0,0]))

// One other generally useful 'fundamental algorithm' related to arrays is called map
// It goes over an array, applying a function to every element, just like forEach. But instead of discarding the values returned by function, it builds up a new array from these values.
function map(func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

show(map(Math.round, [0.01, 2, 9.89, Math.PI]));
// Note that the first argument is called func, not function, this is because function is a keyword and thus not a valid variable name.
// Build a function splitParagraph which, given a paragraph string, returns an array of paragraph fragments. Think of a good way to represent the fragments.
// The method indexOf, which searches for a character or sub-string in a string and returns its position, or -1 if not found, will probably be useful in some way here.
// This is a tricky algorithm, and there are many not-quite-correct or way-too-long ways to describe it. If you run into problems, just think about it for a minute. Try to write inner functions that perform the smaller actions that make up the algorithm.
function splitParagraph(text) {
    function indexOrEnd(character) {
        var index = text.indexOf(character);
        return index == -1 ? text.length : index;
    }

    function takeNormal() {
        var end = reduce(Math.min, text.length,
            map(indexOrEnd, ["*", "{"]));
        var part = text.slice(0, end);
        text = text.slice(end);
        return part;
    }

    function takeUpTo(character) {
        var end = text.indexOf(character, 1);
        if (end == -1)
            throw new Error("Missing closing '" + character + "'");
        var part = text.slice(1, end);
        text = text.slice(end + 1);
        return part;
    }

    var fragments = [];

    while (text != "") {
        if (text.charAt(0) == "*")
            fragments.push({
                type: "emphasised",
                content: takeUpTo("*")
            });
        else if (text.charAt(0) == "{")
            fragments.push({
                type: "footnote",
                content: takeUpTo("}")
            });
        else
            fragments.push({
                type: "normal",
                content: takeNormal()
            });
    }
    return fragments;
}
// The map produces an array of positions where the given characters were found, or the end of the string if they were not found, 
// and the reduce takes the minimum of them, which is the next point in the string that we have to look at.
// Most of the time, when a decision has to be made based on a series of things, even if there are only two of them, writing it as array operations is nicer than handling every value in a separate if statement.
// We can now wire processParagraph to also split the text inside the paragraphs
function processParagraph(paragraph) {
    var header = 0;
    while (paragraph.charAt(0) == "%") {
        paragraph = paragraph.slice(1);
        header++;
    }

    return {
        type: (header == 0 ? "p" : "h" + header),
        content: splitParagraph(paragraph)
    };
}

// Mapping that over the array of paragraphs gives us an array of paragraph objects, which in turn contain arrays of fragment objects.
// The next thing to do is to take out the footnotes, and put references to them in their place.
function extractFootnotes(paragraphs) {
    var footnotes = [];
    var currentNote = 0;

    function replaceFootnote(fragment) {
        if (fragment.type == "footnote") {
            currentNote++;
            footnotes.push(fragment);
            fragment.number = currentNote;
            return { type: "reference", number: currentNote };
        }
        else {
            return fragment;
        }
    }

    forEach(paragraphs, function (paragraph) {
        paragraph.content = map(replaceFootnote,
            paragraph.content);
    });

    return footnotes;
}
// The replaceFootnote function is called on every fragment. When it gets a fragment that should stay where it is, it just returns it, but when it gets a footnote, 
// it stores this footnote in the footnotes array, and returns a reference to it instead. In the process, every footnote and reference is also numbered.
// A lot of people think that concatenating strings is a great way to produce HTML.
var url = "http://www.gokgs.com/";
var text = "Play Go!";
var linkText = "<a href=\"" + url + "\">" + text + "</a>";
print(linkText);
// Not only is this clumsy, but when the string text happens to include an angular bracket or an ampersand, it is also wrong.
// The secret to successful HTML generation is to treat your HTML document as a data structure instead of a flat piece of text. JavaScript's objects provide a very easy way to model this:
var linkObject = {
    name: "a",
    attributes: { href: "http://www.gokgs.com/" },
    content: ["Play Go!"]
};
// Each HTML element contains a name property, giving the name of the tag it represents. When it has attributes, it also contains an attributes property, which contains an object in which the attributes are stored. When it has content, there is a content property, containing an array of other elements contained in this element. 
// Typing in these objects directly is clumsy, but we don't have to do that. We provide a shortcut function to do this for us:
function tag(name, content, attributes) {
    return { name: name, attributes: attributes, content: content };
}
// tag is still rather primitive, so we write shortcuts for common types of elements, such as links, or the outer structure of a simple document:
function link(target, text) {
    return tag("a", [text], { href: target });
}

function htmlDoc(title, bodyContent) {
    return tag("html", [tag("head", [tag("title", [title])]),
    tag("body", bodyContent)]);
}

// write an image function which, when given the location of an image file, will create an img HTML element.
let image = src => tag('img', [], { src: src })

// When we have created a document, it will have to be reduced to a string
// But building this string from the data structures we have been producing is very straightforward. The important thing is to remember to transform the special characters in the text of our document.
function escapeHTML(text) {
    var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"],
    [/</g, "&lt;"], [/>/g, "&gt;"]];
    forEach(replacements, function (replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
// The replace method of strings creates a new string in which all occurrences of the pattern in the first argument are replaced by the second argument, so "Borobudur".replace(/r/g, "k") gives "Bokobuduk". 

// To turn an HTML element object into a string, we can use a recursive function like this:
function renderHTML(element) {
    var pieces = [];

    function renderAttributes(attributes) {
        var result = [];
        if (attributes) {
            for (var name in attributes)
                result.push(" " + name + "=\"" +
                    escapeHTML(attributes[name]) + "\"");
        }
        return result.join("");
    }

    function render(element) {
        // Text node
        if (typeof element == "string") {
            pieces.push(escapeHTML(element));
        }
        // Empty tag
        else if (!element.content || element.content.length == 0) {
            pieces.push("<" + element.name +
                renderAttributes(element.attributes) + "/>");
        }
        // Tag with content
        else {
            pieces.push("<" + element.name +
                renderAttributes(element.attributes) + ">");
            forEach(element.content, render);
            pieces.push("</" + element.name + ">");
        }
    }

    render(element);
    return pieces.join("");
}
// Note the in loop that extracts the properties from a JavaScript object in order to make HTML tag attributes out of them.
// Also note that in two places, arrays are being used to accumulate strings, which are then joined into a single result string. 
// we store all the little strings in an array and then join them, only one big string has to be created. rather than concatenating string on every turn with += operator
print(renderHTML(link("http://www.nedroid.com", "Drawings!")));

var body = [tag("h1", ["The Test"]),
tag("p", ["Here is a paragraph, and an image..."]),
image("img/sheep.png")];
var doc = htmlDoc("The Test", body);
// viewHTML(renderHTML(doc));

// Write a function renderFragment, and use that to implement another function renderParagraph, which takes a paragraph object (with the footnotes already filtered out), and produces the correct HTML element (which might be a paragraph or a header, depending on the type property of the paragraph object).
// This function might come in useful for rendering the footnote references:
function footnote(number) {
    return tag("sup", [link("#footnote" + number,
        String(number))]);
}
// A sup tag will show its content as 'superscript', which means it will be smaller and a little higher than other text. The target of the link will be something like "#footnote1". Links that contain a '#' character refer to 'anchors' within a page, and in this case we will use them to make it so that clicking on the footnote link will take the reader to the bottom of the page, where the footnotes live.
// The tag to render emphasised fragments with is em, and normal text can be rendered without any extra tags.
function renderParagraph(paragraph) {
    return tag(paragraph.type, map(renderFragment,
        paragraph.content));
}

function renderFragment(fragment) {
    if (fragment.type == "reference")
        return footnote(fragment.number);
    else if (fragment.type == "emphasised")
        return tag("em", [fragment.content]);
    else if (fragment.type == "normal")
        return fragment.content;
}

// To make the "#footnote1" links work, an anchor must be included with every footnote. In HTML, an anchor is specified with an a element, which is also used for links. In this case, it needs a name attribute, instead of an href.
function renderFootnote(footnote) {
    var number = "[" + footnote.number + "] ";
    var anchor = tag("a", [number], { name: "footnote" + footnote.number });
    return tag("p", [tag("small", [anchor, footnote.content])]);
}

// Here, then, is the function which, when given a file in the correct format and a document title, returns an HTML document:
function renderFile(file, title) {
    var paragraphs = map(processParagraph, file.split("\n\n"));
    var footnotes = map(renderFootnote,
        extractFootnotes(paragraphs));
    var body = map(renderParagraph, paragraphs).concat(footnotes);
    return renderHTML(htmlDoc(title, body));
}
// viewHTML(renderFile(recluseFile(), "The Book of Programming"));
// The concat method of an array can be used to concatenate another array to it, similar to what the + operator does with strings.

//  We have needed add or equals functions at several points. From now on, we will assume the existence of an object called op, which contains these functions:
var op = {
    "+": function (a, b) { return a + b; },
    "==": function (a, b) { return a == b; },
    "===": function (a, b) { return a === b; },
    "!": function (a) { return !a; }
    /* and so on */
};
reduce(op["+"], 0, [1, 2, 3, 4, 5])

// For cases like that, where different kinds of actionable functions needs to be wrotten to meet requirements, we can use something called 'partial application' is useful. You want to create a new function that already knows some of its arguments, and treats any additional arguments it is passed as coming after these fixed arguments. This can be done by making creative use of the apply method of a function:
function asArray(quasiArray, start) {
    var result = [];
    for (var i = (start || 0); i < quasiArray.length; i++)
        result.push(quasiArray[i]);
    return result;
}

function partial(func) {
    var fixedArgs = asArray(arguments, 1);
    return function () {
        return func.apply(null, fixedArgs.concat(asArray(arguments)));
    };
}
// We want to allow binding multiple arguments at the same time, so the asArray function is necessary to make normal arrays out of the arguments objects.
// It copies their content into a real array, so that the concat method can be used on it. It also takes an optional second argument, which can be used to leave out some arguments at the start.
// Also note that it is necessary to store the arguments of the outer function (partial) into a variable with another name, because otherwise the inner function can not see them ― it has its own arguments variable, which shadows the one of the outer function.
// equals(10) could be written as partial(op["=="], 10), And you can do things like this:
show(map(partial(op["+"], 1), [0, 2, 4, 6, 8, 10]));
// The reason map takes its function argument before its array argument is that it is often useful to partially apply map by giving it a function.
// This 'lifts' the function from operating on a single value to operating on an array of values. For example, if you have an array of arrays of numbers, and you want to square them all, you do this:
function square(x) {return x * x;}

show(map(partial(map, square), [[10, 100], [12, 16], [0, 1]]));

// function composition is a special case of a general pattern: call function A, and then apply function B to the result. Composition is a common concept in mathematics. It can be caught in a higher-order function like this:
let compose = (func01, func02) => {
    return function() {
        return func01(func02.apply(null, arguments))
    }
}

let isUndefined = partial(op['=='], undefined)
let isDefined = compose(op['!'], isUndefined)

show(isDefined(Math.PI))
show(isUndefined(Math.PIE))