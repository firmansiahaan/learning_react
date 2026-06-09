/**
 * In this example, we will see how to use the fetch function in JavaScript to make network requests 
 * and handle asynchronous operations using promises. The fetch function is a powerful tool for 
 * retrieving data from APIs and working with it in a modern JavaScript environment. 
 * We will demonstrate how to use fetch to get data from the Random User API, 
 * parse the response as JSON, and handle any potential errors that may occur during the request. 
 * This example will also show how to chain multiple .then() methods to process the data step by step 
 * and how to use .catch() to handle any errors that may arise. By the end of this example, 
 * you will have a better understanding of how to work with asynchronous JavaScript using promises 
 * and the fetch API.
 * 
 * open terminal and run this code to see the output.
 * node ex-13.js
 * 
 * Asynchronous JavaScript - Simple Promises with Fetch
 */

// In this example, we will see how to use the spread operator in JavaScript.
fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
    console.log(res.json())
);

// The fetch function is a built-in JavaScript function that allows us to make network requests to retrieve resources from a server. In this example, we use the fetch function to make a GET request to the Random User API, which returns a random user profile in JSON format. The URL we are fetching from includes query parameters 
// that specify that we want results from the United States (nat=US) and that we want only one result 
// (results=1). The fetch function returns a promise that resolves to the response of the request. 
// We use the .then() method to handle the resolved promise, where we take the response and call 
// the .json() method on it to parse the response body as JSON. Finally, we log the parsed JSON data 
// to the console.
fetch("https://api.randomuser.me/?nat=US&results=1")
    .then(res => res.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);


