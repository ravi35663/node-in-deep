
const fs = require('fs');
console.log("first line")

setImmediate(()=>{
    console.log("set immediate")
    // it always run just before the setTimeout because it is executed in second execution of event-loop
})

setTimeout(()=>{
    console.log("set timeout")
},)


process.nextTick(()=>{
    console.log("nextTick is called in")
})
console.log("Last line")

/*

Output:
    first line
    last line
    nextTick
    set timeout
    set immediate
*/