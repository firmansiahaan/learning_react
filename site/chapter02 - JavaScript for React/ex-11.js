/**
 * In this example, we will see how to use array destructuring in JavaScript. 
 * Array destructuring allows us to extract values from an array and assign them to variables 
 * in a more concise way. In this example, we have an array called mountains that contains 
 * the names of three mountains: "Tallac", "Ralston", and "Rose". We use array destructuring 
 * to assign the first three elements of the mountains array to the variables first, 
 * second, and third, respectively. After destructuring the array, we can use these variables 
 * to access the values of the corresponding elements in the mountains array. In this case, 
 * first will be "Tallac", second will be "Ralston", and third will be "Rose".
 * 
 * open terminal and run this code to see the output.
 * node ex-11.js
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

// We can also create object methods with object literal enhancement or restructuring:
const print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};

// Now we can create a new object funHike2 that includes the properties 
// name and elevation, as well as the method print, using object literal enhancement.
const funHike2 = { name, elevation, print };

// Now we can use the funHike2 object to access the properties name and elevation, 
// as well as the method print, which will output a string that includes 
// the values of those properties.
funHike2.print(); // Mt. Tallac is 9738 feet tall