/**
 * title: Data Transformations
 * 
 * description: In functional programming, data transformations refer to the process of taking input data 
 * and applying a series of operations to produce new output data. This is often done using 
 * higher-order functions such as `map`, `filter`, and `reduce`, which allow you to manipulate arrays 
 * and objects in a declarative way.
 * 
 * For example, you can use the `map` function to transform an array of numbers by applying a function 
 * to each element. The `filter` function can be used to create a new array that only includes elements 
 * that meet certain criteria. The `reduce` function can be used to combine all elements of an array 
 * into a single value based on a specified operation.
 * 
 * Data transformations are a key aspect of functional programming because they allow you to work 
 * with data in a more flexible and composable way. By using higher-order functions, you can 
 * create complex data transformations by chaining together simple operations, which can lead 
 * to more readable and maintainable code.
 * 
 * In this example, we have an array of color names represented as objects with a `title` property. 
 * We can use the `map` function to transform this array into an array of just the color titles. 
 * This demonstrates how we can take input data (the array of color objects) and apply a transformation 
 * (extracting the titles) to produce new output data (an array of color titles). This is 
 * a common pattern in functional programming, where we focus on transforming data rather than 
 * mutating it.
 * 
 * Arrays data transformations are a fundamental part of functional programming, and they allow us 
 * to work with data in a more declarative and composable way. By using higher-order functions 
 * like `map`, `filter`, and `reduce`, we can create complex data transformations by chaining 
 * together simple operations, which can lead to more readable and maintainable code.  
 * 
 * open terminal and run this code to see the output.
 * node ex-05.js
 * 
 * Functional Concepts - Data Transformations
 */

// In this example, we have an array of color names:
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log(schools.join(", ")); // Output: "Yorktown, Washington & Liberty, Wakefield"

// In this example, we have an array of color names:
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
console.log(list.map(color => color.title)); // Output: ["Rad Red", "Lawn", "Party Pink"]
