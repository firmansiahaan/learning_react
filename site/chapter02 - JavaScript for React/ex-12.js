/**
 * In this example, we will see how to use the spread operator in JavaScript. The spread operator is a powerful feature that allows us to expand elements of an iterable (like an array) or properties of an object into individual elements or properties. It is denoted by three dots (...). The spread operator can be used in various contexts, such as when combining arrays, copying arrays, or creating new objects by merging existing ones. In this example, we will demonstrate how to use the spread operator to combine arrays and create copies of arrays without modifying the original array.
 * In the first part of the example, we have two arrays, peaks and canyons, which contain the names of mountains and canyons, respectively. We use the spread operator to combine these two arrays into a new array called tahoe. By using ...peaks and ...canyons, we are able to include all the elements from both arrays in the tahoe array without having to manually concatenate them.
 * In the second part of the example, we demonstrate how to create a copy of an existing array using the spread operator. We have an array called peaks2, and we create a new array called peaksCopy that is a copy of peaks2 using the spread operator. This allows us to create a new array that contains all the elements of the original array without modifying it. We also show how modifying the original array (by reversing it) does not affect the copied array, demonstrating that they are indeed separate arrays in memory.
 * In the third part of the example, we show how to use the spread operator to extract values from an array while also creating a new array with the remaining elements. We have an array called lakes, and we use array destructuring along with the spread operator to assign the first element to a variable called first and the remaining elements to a variable called others. This allows us to easily access the first element while still having access to the rest of the elements in the array.
 * In the fourth part of the example, we define a function called directions that takes a variable number of arguments using the rest parameter syntax. Inside the function, we use array destructuring and the spread operator to extract the starting point, destination, and any stops in between from the arguments passed to the function. We then log this information to the console in a formatted way.
 * In the final part of the example, we demonstrate how to use the spread operator to create a new object by merging an existing object with additional properties. We have an object called morning that contains properties for breakfast and lunch. We also have a variable called dinner that contains a string. We use the spread operator to create a new object called backpackingMeals that combines the properties of the morning object with the dinner variable as a new property. This allows us to create a new object that includes all the properties of the original object along with any additional properties we want to add.
 * In summary, the spread operator is a versatile tool in JavaScript that can be used to manipulate arrays and objects in a more concise and readable way. It allows us to easily combine arrays, create copies of arrays, extract values from arrays, and merge objects without modifying the original data structures.
 * 
 * open terminal and run this code to see the output.
 * node ex-12.js
 * 
 * Objects and Arrays - The Spread Operator
 */

// In this example, we will see how to use the spread operator in JavaScript.
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

// The spread operator allows us to expand the elements of an array into individual elements. 
// In this example, we use the spread operator to combine the peaks and canyons arrays into 
// a new array called tahoe. By using ...peaks and ...canyons, we are able to include 
// all the elements from both arrays in the tahoe array without having to manually concatenate them. 
// This results in a new array that contains all the elements from both peaks and canyons.
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood

// We can also use the spread operator to create a new array that is a copy of an existing array.
const peaks2 = ["Tallac", "Ralston", "Rose"];

// By using the spread operator, we can create a new array that contains all the elements of 
// the peaks2 array. This allows us to create a copy of the original array without modifying it. 
// In this example, we create a new array called peaksCopy that is a copy of the peaks2 array using 
// the spread operator.
const peaksCopy = [...peaks2];
const [last] = peaks2.reverse();

// Now we can use the peaksCopy array to access the elements of the original peaks2 array, 
// which will contain the same elements as peaks2. In this case, peaksCopy 
// will be ["Tallac", "Ralston", "Rose"].
console.log(peaksCopy.join(", ")); // Tallac, Ralston, Rose

// We can also use the spread operator to create a new array that is a copy of an existing array,
// and then modify the new array without affecting the original array. In this example, 
// we create a new array called peaksCopy2 that is a copy of the peaks2 array using the spread 
// operator, and then we reverse the order of the elements in the peaks2 array. The original peaks2 array
console.log(last); // Rose

// Now we can use the peaksCopy2 array to access the elements of the original peaks2 array, 
// which will still contain the same elements as before, but in a different order. In this case, 
// peaksCopy2 will be ["Tallac", "Ralston", "Rose"], while peaks2 
// will be ["Rose", "Ralston", "Tallac"].
console.log(peaks2.join(", ")); // Rose, Ralston, Tallac


const peaks3 = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks3].reverse();
console.log(last); // Rose
console.log(peaks3.join(", ")); // Tallac, Ralston, Rose

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(first); // Donner
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade


function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma"); 


const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {...morning, dinner}; // using the spread operator to combine the morning object with the dinner variable to create a new object called backpackingMeals   
console.log(backpackingMeals);

// {
// breakfast: "oatmeal",
// lunch: "peanut butter and jelly",
// dinner: "mac and cheese"
// }