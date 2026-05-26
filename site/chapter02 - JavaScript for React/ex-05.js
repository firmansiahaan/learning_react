/**
 * In this example, we will see how to create and invoke a function in JavaScript.
 * A function is a reusable block of code that performs a specific task. In this example, we declare a function named logCompliment using the function declaration syntax. The function does not take any parameters and simply logs a compliment 
 * message to the console when called.
 * After declaring the function, we invoke it by calling logCompliment(). 
 * This executes the code inside the function, which results in the message "You're doing great!" 
 * being printed to the console.
 * Functions are fundamental building blocks in JavaScript and are used to organize and structure code, 
 * allowing for better readability and reusability. By defining functions, you can encapsulate specific 
 * functionality and call it whenever needed throughout your code.
 * In summary, this example demonstrates how to create a function using a function declaration and 
 * how to invoke it to execute the code contained within the function. Functions are essential 
 * for writing modular and maintainable code in JavaScript. 
 * 
 * open terminal and run this code to see the output.
 * node ex-05.js
 * 
 * Creating Functions - Function Expressions
 */
const logCompliment = function() {
    console.log("You're doing great!");
};

// Once you’ve declared the function, you’ll invoke or call it to see it execute
logCompliment();