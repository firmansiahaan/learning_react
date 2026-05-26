/**
 * title: Higher-Order Functions
 * 
 * description: Higher-order functions are functions that can take other functions as arguments or 
 * return functions as their result. They are a fundamental concept in functional programming and 
 * allow for greater flexibility and abstraction in your code. 
 * Higher-order functions enable you to create more reusable and composable code by allowing you 
 * to pass functions as arguments to other functions, or by returning functions from other functions.
 * 
 * For example, the `map` function is a higher-order function that takes an array and a function 
 * as arguments, and returns a new array where each element is the result of applying the function 
 * to the corresponding element in the original array.
 * 
 * The `filter` function is another higher-order function that takes an array and a predicate function, 
 * and returns a new array containing only the elements that satisfy the predicate. 
 * 
 * The `reduce` function is yet another higher-order function that takes an array and a reducer function, 
 * and reduces the array to a single value by applying the reducer function cumulatively to the elements 
 * of the array.
 * 
 * Higher-order functions are a powerful tool in functional programming because they allow you to 
 * abstract away common patterns of computation and create more flexible and reusable code. 
 * By using higher-order functions, you can write code that is more concise, easier to read, 
 * and easier to maintain.
 * 
 * In this example, we have an array of color names represented as objects with a `title` property. We can use the `map` function to transform this array into an array of just the color titles. This demonstrates how we can take input data (the array of color objects) and apply a transformation (extracting the titles) to produce new output data (an array of color titles). This is a common pattern in functional programming, where we focus on transforming data rather than mutating it.
 * Arrays data transformations are a fundamental part of functional programming, and they allow us to work with data in a more declarative and composable way. By using higher-order functions like `map`, `filter`, and `reduce`, we can create complex data transformations by chaining together simple operations, which can lead to more readable and maintainable code.
 * 
 * 
 * open terminal and run this code to see the output.
 * node ex-06.js
 * 
 * Functional Concepts - Higher-Order Functions
 */

// In this example, we have an array of color names:
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log(schools.join(", ")); // Output: "Yorktown, Washington & Liberty, Wakefield"
// In this example, we have an array of color names:
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
console.log(list.map(color => color.title)); // Output: ["Rad Red", "Lawn", "Party Pink"]

// In this example, we have a higher-order function `invokeIf` that takes a condition and two functions 
// as arguments. It invokes `fnTrue` if the condition is true, and `fnFalse` if the condition is false. 
// We also have two simple functions, `showWelcome` and `showUnauthorized`, that log different messages 
// to the console. When we call `invokeIf(true, showWelcome, showUnauthorized)`, 
// it invokes `showWelcome` and logs "Welcome!!!". When we call `invokeIf(false, showWelcome, 
// showUnauthorized)`, it invokes `showUnauthorized` and logs "Unauthorized!!!". 
// This demonstrates how higher-order functions can take other functions as arguments and invoke them 
// based on certain conditions, allowing for more flexible and reusable code.
const invokeIf = (condition, fnTrue, fnFalse) =>
condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"