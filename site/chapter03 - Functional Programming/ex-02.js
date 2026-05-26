/**
 * title: Declarative Programming
 * 
 * description: Declarative programming is a programming paradigm that expresses the logic of 
 * a computation without describing its control flow.
 * It focuses on describing what we want to achieve rather than how to achieve it.
 * 
 * In this example, we have a string "Restaurants in Hanalei" and we want to convert it into 
 * a URL-friendly format by replacing spaces with hyphens.
 * The code uses the `replace` method with a regular expression to replace all spaces in the string 
 * with hyphens.
 * Finally, it logs the resulting `urlFriendly` string, which outputs "Restaurants-in-Hanalei".
 * 
 * This example demonstrates the declarative programming approach, where we describe what we want 
 * to achieve (e.g., "convert this string to a URL-friendly format") without explicitly detailing 
 * the steps to get there.
 * In contrast, an imperative programming approach would focus on describing how to achieve 
 * the desired result by manipulating the program's state through a series of statements (as shown in the previous example).
 * 
 * Essentially, declarative programming produces applications that are easier to reason about, 
 * and when it’s easier to reason about an application, that application is easier to scale.
 *
 * open terminal and run this code to see the output.
 * node ex-02.js
 * 
 * Imperative Versus Declarative - Declarative Programming 
 */

// Declarative programming approach is focused on describing what we want to achieve,
// without explicitly detailing the steps to get there.
const string = "Restaurants in Hanalei";
const urlFriendly = string.replace(/ /g, "-");
console.log(urlFriendly); // "Restaurants-in-Hanalei"