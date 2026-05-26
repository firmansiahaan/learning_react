/**
 * In this example, we will see how to create and invoke a function in JavaScript.
 * A function is a reusable block of code that performs a specific task. In this example, 
 * we declare a function named logActivity using arrow function syntax. 
 * The function takes two parameters, name and activity, which have default values of "Shane McConkey" 
 * and "skiing", respectively. 
 * The function logs a message to the console that includes the values of these parameters.
 * When we invoke the function logActivity() without any arguments, 
 * it outputs "Shane McConkey loves skiing" to the console, using the default parameter values. 
 * When we invoke the function with specific arguments, such as logActivity("Kelly Slater", "surfing"), 
 * it outputs "Kelly Slater loves surfing", using the provided argument values instead of the defaults.
 * Default parameters are a useful feature in JavaScript that allow you to specify default values for 
 * function parameters. This can help to simplify your code and make it more robust by 
 * providing fallback values when arguments are not provided.
 * In summary, this example demonstrates how to create a function using arrow function syntax 
 * with default parameters and how to invoke it to see the output. Default parameters can enhance 
 * the flexibility of your functions and improve code readability by providing meaningful default values 
 * for parameters.
 * 
 * open terminal and run this code to see the output.
 * node ex-07.js
 * 
 * Creating Functions - Arrow Functions
 */

// In this example, we will see how to create a function using arrow function syntax in JavaScript.
const logActivity = (name = "Shane McConkey", activity = "skiing") => {
    console.log(`${name} loves ${activity}`);
};

// Once you’ve declared the function, you’ll invoke or call it to see it execute
logActivity(); // Shane McConkey loves skiing
logActivity("Kelly Slater", "surfing"); // Kelly Slater loves surfing