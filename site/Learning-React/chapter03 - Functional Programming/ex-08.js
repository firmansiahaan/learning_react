/**
 * title: Composition
 * 
 * description: 
 * Function composition is a fundamental concept in functional programming that allows you to combine
 * two or more functions to create a new function. The output of one function becomes the input of the next function in the composition.
 * This technique promotes code reusability and modularity, as you can create small, reusable functions and then compose them together to achieve more complex functionality.
 * In JavaScript, you can create a composition function that takes multiple functions as arguments and returns a new function that applies those functions in sequence.
 * For example, if you have two functions `f` and `g`, you can create a new function `h` that is the composition of `f` and `g` such that `h(x) = f(g(x))`.
 * This allows you to build complex operations from simpler functions, making your code more readable and maintainable.
 * 
 * open terminal and run this code to see the output.
 * node ex-08.js
 * 
 * Functional Concepts - Composition
 */

// In this example, we have two simple functions `addOne` and `double` that perform basic arithmetic operations.
// The `compose` function takes two functions as arguments and returns a new function that applies those functions in sequence.
// When we call `composedFunction(5)`, it first applies `double` to the input (5), resulting in 10, and then applies `addOne` to that result, giving us 11. 
// This demonstrates how function composition allows us to combine simple functions to create more complex behavior.
const addOne = x => x + 1;
const double = x => x * 2;
const compose = (f, g) => x => f(g(x));
const composedFunction = compose(addOne, double);
console.log(composedFunction(5)); // 11


// In this example, we have a template string for a clock time in the format "hh:mm:ss tt".
// We use the `replace` method to substitute the placeholders "hh", "mm", "ss", and "tt" 
// with actual values.
//
// The resulting string is "03:33:33 PM", which represents a specific time in a 12-hour format with 
// an AM/PM indicator. 
// This demonstrates how function composition can be used to manipulate strings and create 
// formatted output by combining simple string operations.
const template = "hh:mm:ss tt";
const clockTime = template
    .replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM");
console.log(clockTime);
// "03:33:33 PM"