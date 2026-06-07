/**
 * This example demonstrates the use of template literals in JavaScript.
 * Template literals provide a more readable and convenient way to create strings, especially 
 * when you need to include variable values.
 * In this example, we declare three variables: firstName, middleName, and lastName. 
 * We then use template literals to create a formatted string that combines these values.
 * In the first console.log statement, we concatenate the variables using the traditional string 
 * concatenation method with the + operator. This can be less readable and more error-prone, 
 * especially as the number of variables increases.
 * In the second console.log statement, we use template literals, which are enclosed by backticks (`) 
 * instead of single or double quotes. Inside the template literal, we can directly embed 
 * the variables using the ${} syntax. This makes the code more concise and easier to read.
 * Template literals also allow for multi-line strings without the need for escape characters, 
 * making it easier to format strings that span multiple lines.
 * In summary, using template literals can improve the readability and maintainability of your code 
 * when working with strings that include variable values. It is a modern feature of JavaScript 
 * that is widely supported in modern browsers and environments.
 * 
 * open terminal and run this code to see the output.
 * node ex-03.js
 * 
 * Declaring Variables - Template Strings
 */
var firstName = "John";
var middleName = "Fitzgerald";
var lastName = "Kennedy";

console.log(lastName + ", " + firstName + " " + middleName);

console.log(`${lastName}, ${firstName} ${middleName}`); // using template literals