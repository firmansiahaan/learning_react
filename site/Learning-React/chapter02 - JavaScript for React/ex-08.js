/**
 * In this example, we will see how to use object destructuring in JavaScript. 
 * Object destructuring allows us to extract properties from an object and assign them 
 * to variables in a more concise way. In this example, we have an object named sandwich 
 * with properties bread, meat, cheese, and toppings. 
 * We use object destructuring to extract the bread and meat properties from the sandwich object 
 * and assign them to variables with the same names. Once we’ve destructured the object, 
 * we can use the variables bread and meat to access the values of those properties. 
 * In this case, bread will be "dutch crunch" and meat will be "tuna". 
 * Object destructuring is a powerful feature in JavaScript that can help to simplify your code 
 * and make it more readable by allowing you to extract values from objects in a clear 
 * and concise manner.
 * 
 * open terminal and run this code to see the output.
 * node ex-08.js
 * 
 * Objects and Arrays - Destructuring Objects
 */

// In this example, we will see how to use object destructuring in JavaScript.
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

// Object destructuring allows us to extract properties from an object and assign them to variables 
// in a more concise way. In this example, we use object destructuring to extract the bread and 
// meat properties from the sandwich object and assign them to variables with the same names.
const { bread, meat } = sandwich;

// Once we’ve destructured the object, we can use the variables bread and meat to access the values 
// of those properties. In this case, bread will be "dutch crunch" and meat will be "tuna".
console.log(bread, meat); // dutch crunch tuna