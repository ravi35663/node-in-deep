//How does Node.js handle concurrency?
/*
    Node.js handles concurrency using an event-driven, non-blocking I/O model. 
    This means that rather than waiting for I/O operations to complete before moving on to the 
    next task, Node.js can execute multiple tasks simultaneously by delegating I/O operations 
    to separate threads in the background.
*/

/*
    For example, let’s say you have a Node.js application that needs to make multiple API 
    requests to external services. Rather than waiting for each request to complete before 
    moving on to the next one, Node.js can send each request in parallel and then process the 
    responses as they arrive.
*/

/*
    Here’s an example of how to implement concurrency in Node.js using the 'async' module:
*/

const async = require('async') // this can be installed using npm 
async.parallel([
    function(callback){
        // Make an API request 1
        console.log("function 1")
        return "one"
    },
    function(callback){
        // Make an API request 2
        console.log("function 2")
        return "two"
    },
    function(callback){
        // Make an API request 3
        console.log("function 3")
        return "three";
    }
],
    function(err,results){
        console.log("Result of all callbacks",results)
    }
)