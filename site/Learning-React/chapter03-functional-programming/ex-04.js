/**
 * title: Pure Functions
 * 
 * description: A pure function is a function that always produces the same output for the same input 
 * and has no side effects. This means that a pure function does not modify any external state or data, 
 * and it does not rely on any external state or data to produce its output. Pure functions 
 * are an important concept in functional programming because they are easier to reason about, 
 * test, and debug.
 * In JavaScript, you can create pure functions by avoiding any operations that modify external state 
 * or data. Instead, you can use local variables and return new values based on the input parameters. 
 * For example, a pure function that adds two numbers would look like this:
 * ```javascript
 * function add(a, b) {
 *   return a + b;
 * }
 * ```
 * This function is pure because it always produces the same output for the same input and does 
 * not modify any external state or data. In contrast, a function that modifies an external variable 
 * would not be pure:
 * ```javascript
 * let count = 0;
 * function increment() {
 *  count++;
 * }
 * ```
 * This function is not pure because it modifies the external variable `count` and does not always 
 * produce the same output for the same input.
 * In functional programming, pure functions are often used to create more predictable and maintainable 
 * code. By avoiding side effects and relying only on input parameters, pure functions can be easily 
 * tested and debugged, and they can be composed together to create more complex functionality.
 * 
 * open terminal and run this code to see the output.
 * node ex-04.js
 * 
 * Functional Concepts - Pure Functions
 */

// In this example, we have an object `frederick` that represents Frederick Douglass, 
// a famous abolitionist and writer. The object has properties for his name, whether he can read, 
// and whether he can write. We also have a function `selfEducate` that updates the properties of 
// the `frederick` object to indicate that he can read and write. When we call `selfEducate()`, 
// it modifies the `frederick` object directly, which is why the output shows that he can read and write.
// This demonstrates that the `selfEducate` function is not a pure function because it has side effects 
// by modifying external state (the `frederick` object). In functional programming, we would typically 
// avoid mutating external state and instead return a new object with the updated properties 
// to maintain immutability and avoid side effects in our code.
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}

selfEducate();
console.log(frederick);