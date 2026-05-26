/**
 * In this example, we will see how to use the fetch function in JavaScript to make network requests
 * 
 * open terminal and run this code to see the output.
 * node ex-15.js
 * 
 * Asynchronous JavaScript - Building Promises
 */

// In this example, we will see how to build a promise in JavaScript.
const getPeople = count =>
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>
        request.status === 200
            ? resolves(JSON.parse(request.response).results)
            : reject(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
});

// The getPeople function is defined as a function that takes a count parameter and returns 
// a new Promise. Inside the promise, we create a new XMLHttpRequest object to make a network request 
// to the Random User API. We construct the API URL using the count parameter to specify 
// how many random user profiles we want to retrieve. We set up the onload event handler to check 
// if the request was successful (status code 200) and resolve the promise with the parsed JSON data 
// \if it was successful, or reject the promise with an error message if it was not successful. 
// We also set up an onerror event handler to reject the promise if there is an error during the request. 
// Finally, we send the request to the server.
getPeople(5)
    .then(members => console.log(members))
    .catch(error => console.error(`getPeople failed: ${error.message}`));


