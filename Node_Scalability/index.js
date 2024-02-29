/*
    Node.js is also designed to be highly scalable, meaning it can handle large amounts of 
    traffic and requests without sacrificing performance or reliability. 
    This is achieved through a combination of techniques, including clustering, load balancing, 
    and caching.
*/

/*
Clustering:
    Clustering involves creating multiple instances of a Node.js process, allowing the 
    application to take advantage of multiple cores on the server.
    -> number of cors === number of cpus
    -> os.cpus().length-> it will gives you number of cpus in your system/server
*/

/*
    Here’s an example of how to implement clustering in Node.js using the cluster module:
*/

const cluster = require("cluster")
const os = require('os')
const http = require('http')

if(cluster.isMaster){
    const workers = os.cpus().length;
    for(let i=0;i<workers;i++){
        cluster.fork()//it creates child processes AKS worker processes 
    }
    /*
        The primary purpose of using cluster.fork() is to enable a Node.js application to take 
        advantage of multiple CPU cores and distribute the workload across multiple processes.
    */

    // Listen for worker exit events
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died`)
        /*
            fork a new worker to replace the terminated one so that rest of the load goes to 
            newly created child process
        */
       cluster.fork();
    })
}else{
    // Worker process code:
    console.log(`Worker ${process.pid} started`)
    // Create server here
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end("Hello World")
    }).listen(3000);// Listening server on port 3000
}

/*
    In the above example, the master process forks/start multiple worker processes, each handling 
    incoming HTTP requests. If a worker process terminates, the master process automatically 
    spawns/replace a new worker to replace it.
*/
/*
    In this example, we use the cluster module to create multiple instances of the Node.js 
    process, each running on a separate core of the server. 
    The cluster.isMaster condition checks if the current process is the master process, 
    and if so, forks the required number of worker processes. 
    The cluster.on event handler listens for worker processes that have died and restart them 
    as needed.
*/


/*
Load Balancing:
    Load balancing involves distributing incoming requests across multiple servers or instances 
    of the application, to ensure that no single server or instance becomes overwhelmed.
*/

/*
Caching:
    Caching involves storing frequently accessed data in memory or on disk, to reduce the 
    amount of time it takes to access the data.
*/
