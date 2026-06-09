/**
 * In this example, we will see how to use the fetch function in JavaScript to make network requests
 * 
 * open terminal and run this code to see the output.
 * node ex-14.js
 * 
 * Asynchronous JavaScript - Async/Await
 */

// In this example, we will see how to use async/await in JavaScript to handle asynchronous 
// operations in a more readable and concise way. The async/await syntax is built on top of promises 
// and allows us to write asynchronous code that looks and behaves more like synchronous code. 
// We will demonstrate how to define an async function that uses the await keyword to pause the execution of the function until a promise is resolved. In this example, we will use the fetch function to make a network request to the Random User API, which returns a random user profile in JSON format. We will handle any potential errors that may occur during the request using try/catch blocks. By the end of this example, you will have a better understanding of how to work with asynchronous JavaScript using async/await and how it can help improve the readability and 
// maintainability of your code.
const getFakePerson = async () => {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
};

// The getFakePerson function is defined as an async function, which means it can use the await keyword 
// to pause its execution until a promise is resolved. Inside the function, we make a fetch request 
// to the Random User API to retrieve a random user profile. We use await to wait for 
// the fetch request to complete and return a response object. Then, we call the .json() method on 
// the response object to parse the response body as JSON, and we use destructuring assignment 
// to extract the results property from the parsed JSON data. Finally, we log the results to the console.
//  When we call getFakePerson(), it will execute the asynchronous code and output 
// the random user profile to the console once the fetch request is complete and the data is parsed.
getFakePerson();


// In the getFakePerson2 function, we demonstrate how to handle potential errors that may occur 
// during the asynchronous operation using a try/catch block. We wrap the fetch request and 
// the subsequent operations in a try block, and if any error occurs during the execution of the code 
// within the try block, it will be caught by the catch block. In the catch block, we log the error 
// to the console using console.error(). This way, if there is an issue with the network request or 
// any other part of the asynchronous code, we can gracefully handle it and provide feedback 
// about what went wrong.
const getFakePerson2 = async () => {
    try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = res.json();
        console.log(results);
    } catch (error) {
        console.error(error);
    }
};

// When we call getFakePerson2(), it will execute the asynchronous code and output the random user profile
getFakePerson2();