/**
 * In this example, we will see the difference between var and let keywords in JavaScript.
 * The var keyword is function-scoped, which means that it is accessible throughout the entire function in which it is declared. In contrast, the let keyword is block-scoped, meaning that it is only accessible within the block (enclosed by curly braces) in which it is declared.
 * In the first part of the code, we declare a variable topic using var and assign it the value "JavaScript". Inside the if block, we redeclare topic using var and assign it the value "React". When we log the value of topic inside the block, it outputs "React". However, when we log the value of topic outside the block, it also outputs "React" because var is function-scoped and the redeclaration inside the block affects the variable in the entire function. 
 * In the second part of the code, we declare a variable topicLet using let and assign it the value "JavaScript". Inside the if block, we declare a new variable topicLet using let and assign it the value "React". When we log the value of topicLet inside the block, it outputs "React". However, when we log the value of topicLet outside the block, it outputs "JavaScript" because let is block-scoped and the redeclaration inside the block does not affect the variable outside the block.
 * This example demonstrates the difference between var and let in terms of scope. While var allows for redeclaration and can lead to unintended consequences, let provides block-level scoping, which helps to prevent such issues and makes it easier to manage variable scope in your code.
 * In summary, using let is generally recommended over var in modern JavaScript development because it provides better scoping and helps to avoid potential bugs caused by variable redeclaration and hoisting associated with var.
 * 
 * 
 * open terminal and run this code to see the output.
 * node ex-02.js
 * 
 * title: The let Keyword
 */
var topic = "JavaScript";
if (topic) {
    var topic = "React";
    console.log("block", topic); // block React
}
console.log("global", topic); // global React


var topicLet = "JavaScript";
if (topicLet) {
    let topicLet = "React";
    console.log("block", topicLet); // block React
}
console.log("global", topicLet); // global JavaScript