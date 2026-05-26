/**
 * In JavaScript, there are two main module systems: CommonJS and ES6 Modules.
 * CommonJS is the module system used in Node.js, while ES6 Modules are the standard for JavaScript modules in modern browsers and are also supported in Node.js.
 * ES6 Modules - ES6 Modules use the export and import statements to define and use modules. 
 * In ES6 Modules, you can export functions, objects, or values from a module using the export keyword.
 * For example, in ES6 Modules, we can export the print and log functions like this:
 * export const print = (message) => log(message, new Date());
 * export const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);
 * To import these functions in another module, we can use the import statement:
 * import { log, print } from "./txt-helpers.js";
 * ES6 Modules are statically analyzed, which means that the imports and exports are determined at compile time. This allows for better optimization and tree shaking, which can reduce the size of the final bundle.
 * CommonJS - CommonJS uses the module.exports object to define what a module exports.
 * In CommonJS, you can export functions, objects, or values by assigning them to module.exports.
 * For example, in CommonJS, we can export the print and log functions like this:
 * const print = (message) => log(message, new Date());
 * const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);
 * module.exports = { print, log };
 * To import these functions in another module, we can use the require function:
 * const { log, print } = require("./txt-helpers");
 * CommonJS modules are loaded synchronously, which means that the module is loaded and executed 
 * before the rest of the code continues. This can lead to issues with circular dependencies, 
 * where two or more modules depend on each other.
 * In summary, ES6 Modules are the modern standard for JavaScript modules and offer better optimization 
 * and tree shaking, while CommonJS is the module system used in Node.js and is loaded synchronously. 
 * When working with React, it's generally recommended to use ES6 Modules for better compatibility 
 * and performance.
 * 
 * open terminal and run this code to see the output.
 * node ex-17.js
 * 
 * ES6 Modules - CommonJS
 */

// For example, in CommonJS, we can export the print and log functions as an object:
const print = (message) => log(message, new Date());

const log = (message, timestamp) => {
    console.log(`${timestamp.toString()}: ${message}`)
}

module.exports = {print, log};
  
// CommonJS does not support an import statement. Instead, modules are imported 
// with the require function:
const { log, print } = require("./txt-helpers");