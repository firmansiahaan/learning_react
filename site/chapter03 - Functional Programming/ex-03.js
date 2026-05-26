/**
 * title: Immutability
 * 
 * description: Immutability is a fundamental concept in functional programming that refers to 
 * the idea that data cannot be changed after it has been created. Instead of modifying existing data, 
 * you create new data structures with the desired changes. This approach helps to avoid side effects 
 * and makes it easier to reason about your code.
 * 
 * In JavaScript, objects and arrays are mutable, meaning that their properties and elements can be 
 * changed after they are created. However, you can use techniques such as object spread syntax 
 * or array methods like `map`, `filter`, and `reduce` to create new objects and arrays without 
 * modifying the original ones.
 * 
 * In this example, we have an object `color_lawn` that represents a color with a title, 
 * a hex code, and a rating. We also have a function `rateColor` that takes a color object 
 * and a rating, and updates the rating of the color. When we call `rateColor(color_lawn, 5)`, 
 * it updates the rating of `color_lawn` to 5. This demonstrates that objects in JavaScript are 
 * mutable, meaning that their properties can be changed after they are created. 
 * The `color_lawn` object is modified directly by the `rateColor` function, which is why 
 * both `console.log` statements output 5.
 * In functional programming, we would typically avoid mutating the original object and instead 
 * return a new object with the updated rating. This can be achieved using object spread syntax 
 * to create a new object that includes all the properties of the original object, along with 
 * the updated rating. This way, we can maintain immutability and avoid side effects in our code.
 * 
 * In summary, immutability is an important concept in functional programming that helps 
 * to prevent unintended side effects and makes it easier to reason about your code. 
 * By creating new data structures instead of modifying existing ones, you can write more predictable 
 * and maintainable code. 
 * 
 * open terminal and run this code to see the output.
 * node ex-03.js
 * 
 * Functional Concepts - Immutability
 */

// In this example, we have an object `color_lawn` that represents a color with a title, a hex code, 
// and a rating. We also have a function `rateColor` that takes a color object and a rating, 
// and updates the rating of the color. 
// When we call `rateColor(color_lawn, 5)`, it updates the rating of `color_lawn` to 5. 
// This demonstrates that objects in JavaScript are mutable, meaning that their properties 
// can be changed after they are created. 
// The `color_lawn` object is modified directly by the `rateColor` function, which is why 
// both `console.log` statements output 5.
let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

function rateColor(color, rating) {
    color.rating = rating;
    return color;
}
console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5


// Let’s consider an array of color names:
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

//We could create a function that will add colors to that array using Array.push:
const addColor = function(title, colors) {
    colors.push({ title: title });
    return colors;
};

// However, this function mutates the original array, which can lead to unintended consequences.
// Instead, we can create a new array with the added color using the spread operator:
const addColor2 = function(title, colors) {
    return [...colors, { title: title }];
};
// This way, we maintain immutability and avoid side effects in our code.
// Array.concat concatenates arrays. In this case, it takes a new object with a new color
// title and adds it to a copy of the original array.