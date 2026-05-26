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
 * node ex-10.js
 * 
 * Objects and Arrays - Object Literal Enhancement
 */

// In this example, we will see how to use object literal enhancement in JavaScript.
const name = "Tallac";
const elevation = 9738;

// Object literal enhancement allows us to create objects more concisely when the property names 
// are the same as the variable names. In this example, we have two variables, name and elevation, 
// and we want to create an object that has properties with the same names and values as these variables. 
// Instead of writing { name: name, elevation: elevation }, 
// we can simply write { name, elevation } and JavaScript will automatically create properties with the same names and assign them the corresponding variable values.
const funHike = { name, elevation };

// Now we can use the funHike object to access the properties name and elevation, 
// which will have the values "Tallac" and 9738, respectively.
console.log(funHike); // {name: "Tallac", elevation: 9738