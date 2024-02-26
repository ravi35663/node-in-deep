const os = require('os')
console.log(os.cpus())
/*
==> How does Node.js work?
-> Whenever we make requests to a server first that request goes into the event queue which is the part of Node.js
-> there can we two type of requests 
    1) Blocking request
    2) Non-Blocking request
-> Node.js has one more important thing preset which is known as Event-Loop which will keep track of 
   all the request/events present in the event queue.
-> Event-loop will check which kind of request user has send and if the request is a asynchronous
   /non-blocking request then it sent request to the uses without waiting any other request to complete.

-> if the request is blocking request then that request went to the thread-pool which have threads available 
   to perform blocking operations.
   thread-pool: it is a collections of threads.Thread is also known as worker
-> once the job of blocking operation is completed by the thread, the thread come back to the 
   thread-pool and it will return the result to the request.
-> whenever you write synchronous code it is always blocking
-> asynchronous code are non-blocking and even the result of that line of code is not completed it proceed with next line.
*/

/*
    How Node.js executes requests and CPU intensive tasks
    index.js
        -> Node process
           -> MainThread: 
                -> init project
                -> top level code execution
                -> Event callbacks register
                -> start EventLoop () => Look for 
                    -> 1.Expired timer callbacks
                    -> 2.IO polling (it is run isolate)
                    -> 3.setImmediate CB
                    -> 4.close callbacks
                    * if any task is pending then event loop repeat execution otherwise it exists the program
                    * any promise is found between any above  process, it can execute anywhere in between the process
            -> Thread pool (used for handling CPU intensive task)
                -> default 4 thread are allocated
                -> we can increase size of the  threads in node.js with process.env.UV_THREADPOOL_SIZE = any number

*/ 