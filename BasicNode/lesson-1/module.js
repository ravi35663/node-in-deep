const xyz = require('./people')
// This is showing empty object since we are not exporting anything people file
// console.log(xyz);

// Node core modules 
const os = require('os');
// current os object
console.log("OS is ",os.platform(),os.homedir());

/*
==> Node.js OS Modules:
    ->  The os module in Node.js provides a set of utilities for interacting with the operating system and its 
        resources. It allows Node.js applications to access information about the underlying operating system, 
        which is useful for tasks like determining platform specifics, managing system resources, or even 
        adjusting application behavior depending on the environment.
*/

/*
    ==> To use the os module, you need to require it:
*/
const os = require('os');

//  Returns the architecture of the CPU (e.g., x64, arm, ia32).
console.log(os.arch()); 

/*
    Returns the platform of the operating system (e.g., darwin for macOS, win32 for Windows, linux).
*/
console.log(os.platform()); // 'linux'

/* Returns an array of objects containing information about each CPU core (model, speed, and times).*/
console.log(os.cpus());

/* Returns the total amount of system memory in bytes.*/
console.log(os.totalmem()); // e.g., 17179869184 (bytes)


/* Returns the amount of free memory available in bytes. */
console.log(os.freemem()); // e.g., 8589934592 (bytes)

/* Returns the system uptime in seconds.*/
console.log(os.uptime()); // e.g., 3600 (seconds)

/* Returns the hostname of the operating system.*/
console.log(os.hostname()); // e.g., 'my-computer'

/*
===> Use Cases:
    ->  System Monitoring: 
        Using methods like os.freemem() and os.cpus() for real-time system monitoring.
    ->  System Compatibility: 
        Checking the platform or architecture to provide platform-specific code or configurations.
    ->  Application Behavior: 
        Adjusting application settings based on system resources such as available memory or CPU information.

*/