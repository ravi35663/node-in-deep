
console.log("first line")
setTimeout(()=>{
    console.log("set timeout")
},0)

setImmediate(()=>{
    console.log("set immediate")
    // it always run just before the setTimeout because it is executed in second execution of event-loop
})
process.nextTick(()=>{
    console.log("nextTick is called in")
})
console.log("Last line")

/*
Output:
    Line 1 console
    Line 10 console
    Line 7 console
    Line 3 console
*/