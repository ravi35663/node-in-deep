
const fs = require("fs");

console.log("1: Start of script"); // Synchronous

setTimeout(() => console.log("2: setTimeout callback"), 0); // Timer phase

setImmediate(() => console.log("3: setImmediate callback")); // Check phase

setTimeout(() => console.log("4: setTimeout callback"), 3000); // Timer phase

fs.readFile(__filename, () => { // Here po
  console.log("5: I/O callback"); // I/O callbacks phase or Poll-Phase:

  setTimeout(()=> {console.log("6: This will run after 5 second")},5 * 1000)

  setImmediate(() => console.log("7: setImmediate inside I/O")); // Check phase inside I/O

  setTimeout(() => console.log("8: setTimeout inside I/O"), 0); // Timer phase inside I/O

  process.nextTick(() => console.log("9: nextTick inside I/O")); // Microtask inside I/O
});

process.nextTick(() => console.log("10: nextTick callback")); // Microtask

Promise.resolve().then(() => console.log("11: Promise callback")); // Microtask

console.log("12: End of script"); // Synchronous

/*
Note:
   The reason setImmediate is executed before setTimeout inside an I/O callback is that the 
   setImmediate queue is processed immediately after the poll phase, while the setTimeout callback must 
   wait for the next iteration of the timers phase.

-> setImmediate works differently in main phase and in inside the other phases (I/O or Poll phase)
-> Always remember how phases are executed inside the node.js.
*/
