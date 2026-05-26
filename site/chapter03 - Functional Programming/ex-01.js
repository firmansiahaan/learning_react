/**
 * title: Imperative Programming
 * 
 * description: Imperative programming is a programming paradigm that uses statements that change 
 * a program's state. 
 * It focuses on describing how a program operates, using statements that change a program's state.
 * 
 * In this example, we have a string "Restaurants in Hanalei" and we want to convert it into 
 * a URL-friendly format by replacing spaces with hyphens. The code uses a for loop to iterate 
 * through each character in the string, checking if it is a space. If it is a space, it appends 
 * a hyphen to the `urlFriendly` variable; otherwise, it appends the original character. 
 * 
 * Finally, it logs the resulting `urlFriendly` string, which outputs "Restaurants-in-Hanalei".
 * This example demonstrates the imperative programming approach, where we explicitly describe how 
 * to achieve the desired result by manipulating the program's state through a series of statements. 
 * In contrast, a declarative programming approach would focus on describing what we want to achieve 
 * (e.g., "convert this string to a URL-friendly format") without explicitly detailing the steps 
 * to get there.
 * 
 * open terminal and run this code to see the output.
 * node ex-01.js
 * 
 * Imperative Versus Declarative - Imperative Programming 
 */

// Imperative programming approach is focused on describing how a program operates, 
// using statements that change a program's state.
const string = "Restaurants in Hanalei";
const urlFriendly = "";
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}
console.log(urlFriendly); // "Restaurants-in-Hanalei"