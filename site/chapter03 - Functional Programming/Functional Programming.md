# Functional Programming

**Functional Programming with Javascript**

JavaScript supports functional programming because JavaScript functions are first-
class citizens. This means that functions can do the same things that variables can do.
The latest JavaScript syntax adds language improvements that can beef up your func‐
tional programming techniques, including arrow functions, promises, and the spread
operator.

In JavaScript, functions can represent data in your application. You may have noticed
that you can declare functions with the var, let, or const keywords the same way
you can declare strings, numbers, or any other variables:

var log = function(message) {
    console.log(message);
};
log("In JavaScript, functions are variables");

We can write the same function using an arrow function. Functional programmers
write a lot of small functions, and the arrow function syntax makes that much easier:

const log = message => {
    console.log(message);
};

Since functions are variables, we can add them to objects

const obj = {
    message: "They can be added to objects like variables",
        log(message) {
            console.log(message);
    }};
obj.log(obj.message);