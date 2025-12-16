/*
==> What is a REST API?
    ->  REST (Representational State Transfer) is an architectural style for designing networked 
        applications. It uses a stateless, client-server, cacheable communication protocol — 
        typically HTTP.

    ->  REST APIs are widely used to allow different software systems to communicate over the web. 
        They provide a standardized way to interact with web services.

==> Types of REST API Requests
        GET: Retrieve data from the server.
        POST: Send data to the server to create a resource.
        PUT: Update an existing resource on the server.
        DELETE: Remove a resource from the server.
        PATCH: Partially update a resource.

==> Why REST APIs are Needed?
    ->  Before REST, APIs were often tightly coupled to specific clients, making them inflexible and 
        difficult to scale or modify.

    ->  REST provides a flexible, scalable way to interact with resources. It allows developers to 
        build APIs that can be consumed by any client that understands HTTP.
*/
/*
==> What is Middleware in node?
    ->  Middleware functions in NodeJS are functions that have access to the request object (req), 
        the response object (res), and the next middleware function in the application's 
        request-response cycle.

    ->  Middleware can execute any code, make changes to the request and response objects, end the 
        request-response cycle, and call the next middleware function.
*/
/*
==> Express Middleware
    ->  Express middleware functions are used to process requests and responses in an Express 
        application. middleware can be used to add logging, authentication, parsing, and 
        error handling.

==> Commonly Used Middleware in express:
    1) express.json(): Parses incoming JSON requests and puts the parsed data in req.body.
    2) express.urlencoded(): Parses incoming requests with URL-encoded payloads.
    3) morgan: A logging middleware.
    4) cors: A middleware for enabling Cross-Origin Resource Sharing.
    5) helmet: Helps secure Express apps by setting various HTTP headers.

Note: Middleware functions are executed in the order they are defined in the app.
*/

/*
HTTP Headers and Status Codes in API Development
==> What are HTTP Headers:
    ->  HTTP headers are key-value pairs sent between the client and server in an HTTP request or 
        response. They provide essential information about the request or response

==> Common HTTP Headers:
        1) Content-Type: Specifies the media type of the resource (e.g., application/json).
        2) Authorization: Contains credentials for authenticating the client.
        3) Cache-Control: Directives for caching mechanisms.
        4) Set-Cookie: Used to send cookies from the server to the client.

==> HTTP Status Codes
    ->  Status codes are issued by a server in response to a client's request. They 
        indicate the result of the request.

==> Common Status Codes:
    1) 200 OK: The request was successful.
    2) 201 Created: A resource was successfully created.
    3) 400 Bad Request: The server could not understand the request due to invalid syntax.
    4) 401 Unauthorized: The client must authenticate itself to get the requested response.
    5) 403 Forbidden: The client does not have access rights to the content.
    6) 404 Not Found: The server can not find the requested resource.
    7) 500 Internal Server Error: The server encountered a situation it doesn't know how to handle.
*/
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'MyValue');

    res.status(200).json({ message: 'Data retrieved successfully' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

/*
==> Use Case: Setting CORS Headers
    ->  When building a REST API that will be consumed by a web application hosted on a different 
        domain, you need to enable CORS by setting the appropriate headers.
*/

// 'Access-Control-Allow' -> these are common in each setHeader
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Acceptable by every origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});