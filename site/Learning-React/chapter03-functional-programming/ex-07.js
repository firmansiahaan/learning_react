/**
 * title: Recursion
 * 
 * description: 
 * Recursion is a programming technique where a function calls itself in order to solve a problem.
 * 
 * A recursive function typically has a base case that stops the recursion and a recursive case that 
 * breaks the problem into smaller subproblems.
 * 
 * Recursion can be a powerful tool for solving problems that can be broken down into smaller, similar 
 * subproblems, such as traversing a tree or calculating the factorial of a number. 
 * However, it can also lead to performance issues if not implemented correctly, such as 
 * infinite recursion or excessive memory usage.
 * 
 * In functional programming, recursion is often used as an alternative to loops for iterating over data 
 * structures. Recursive functions can be more elegant and easier to read than iterative solutions, 
 * especially when working with complex data structures like trees or graphs. However, it's important to 
 * ensure that the recursive function has a well-defined base case and that it does not lead to infinite 
 * recursion.
 * 
 * 
 * open terminal and run this code to see the output.
 * node ex-07.js
 * 
 * Functional Concepts - Recursion
 */

// In this example, we have a recursive function `countdown` that takes a value and a function as 
// arguments. The function calls itself with a decremented value until it reaches zero. 
// The provided function is called with the current value at each step of the countdown. 
// When we call `countdown(10, value => console.log(value))`, it will log the numbers 
// from 10 down to 0 in descending order. 
// 
// This demonstrates how recursion can be used to perform a countdown by repeatedly calling 
// the same function with modified arguments until a base case is reached.
const countdown = (value, fn) => {
    fn(value);
    return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, value => console.log(value));
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0