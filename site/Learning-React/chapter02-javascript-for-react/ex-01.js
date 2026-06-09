/**
 * In JavaScript, you can reassign a variable declared with `var` or `let`. In this example, 
 * we declare a variable `pizza` and assign it the value `true`. Later, we reassign it to `false`. 
 * When we log the value of `pizza`, it outputs `false`.  
 * However, if we were to declare `pizza` using `const`, we would not be able to reassign it, 
 * and doing so would result in an error. The `const` keyword is used to declare variables that 
 * are meant to be constant and cannot be reassigned after their initial assignment.    
 * In this example, since we are using `var`, we can reassign the value of `pizza` without any issues. 
 * If we were to change the declaration to `const pizza = true;`, we would get an error when trying 
 * to reassign it to `false`.
 * This example demonstrates the difference between `var` and `const` in JavaScript. 
 * While `var` allows for reassignment, `const` does not, making it a better choice for variables 
 * that should not change throughout the program.
 * In summary, using `const` helps to prevent accidental reassignment of variables that are meant 
 * to be constant, while `var` allows for more flexibility but can lead to unintended consequences 
 * if not used carefully.
 * 
 * open terminal and run this code to see the output.
 * node ex-01.js
 * 
 * Declaring Variables - The const Keyword 
 */
var pizza = true;
pizza = false;
console.log(pizza); // false

const pizzaConst = true;
// pizzaConst = false; // This will throw an error because pizzaConst is declared with const
console.log(pizzaConst); // true