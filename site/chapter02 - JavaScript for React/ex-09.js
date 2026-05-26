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
 * node ex-09.js
 * 
 * Objects and Arrays - Destructuring Arrays
 */

// In this example, we will see how to use array destructuring in JavaScript.
const [firstAnimal] = ["Horse", "Mouse", "Cat"];

// Array destructuring allows us to extract values from an array and assign them to variables in 
// a more concise way. In this example, we use array destructuring to extract the first element of 
// the array, which is "Horse", and assign it to the variable firstAnimal.
console.log(firstAnimal); // Horse

// If you want to skip elements in the array, you can use commas to indicate the positions of 
// the elements you want to ignore. In this example, we skip the first two elements and 
// extract the third element, which is "Cat", 
// and assign it to the variable thirdAnimal.
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];

// Now we can use the variable thirdAnimal to access the value of the third element 
// in the array, which is "Cat".
console.log(thirdAnimal); // Cat