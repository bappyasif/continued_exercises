// currying in JavaScript
// Currying refers to the process of transforming a function with multiple arity into the same function with less arity.
// The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.

let babyAnimals = a => {
    return b => {
        return `i love `.concat(a).concat(' and ').concat(b)
    }
}

let babyChimps = babyAnimals('chimps')
console.log(babyChimps('lemar'))

// Currying is not a pattern that is native to javascript, so it is often handy to write a (currier) utility function that can transform any given function into a curried version of itself.
let currier = function(func) {
    let args = Array.prototype.slice.call(arguments, 1)
    return function() {
        return func.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)))
    }
}

// we can apply currying to any function by passing the function as the first argument to currier
let sequence = (start, end) => {
    let seq = [];
    for(let i = start; i<= end; i++) seq.push(i)
    return seq
}
 let seq5 = currier(sequence, 1)
 console.log(seq5(5))

// another example with currying
let byeBye = (str1, str2) => {
    return str1.concat(' and ').concat(str2)
}

let buhBye = currier(byeBye, 'That\'s all folks')
console.log(buhBye('until next time!!'))