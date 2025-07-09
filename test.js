
const url = require('url');

// Sample URL
const myURL = 'https://www.example.com:8080/path/to/resource?id=123&name=John#section1';

// Parsing the URL
const parsedURL = url.parse(myURL, true);
console.log("Parsed URL: ",parsedURL);