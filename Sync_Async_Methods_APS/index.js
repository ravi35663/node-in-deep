/*
    Example of Synchronous file reading:
    const fs = require('fs')
    *This will block the event loop until the file is read
    const fs.readFileSync('./path/of/file/f.txt','utf8')
    console.log(data);
    * Next line of code won't execute until the file is fully read
*/

/*
    Example of asynchronous file reading:
    const fs = require('fs')
    *This won't block. Node.js will continue executing the next lines of code.
    fs.readFile('./path_of_file/t.txt','utf8',(err,data)=>{
        console.log("Data is :",data);
    })

    *This line can execute even if the file hasn't been fully read yet
    console.log('Reading file asynchronously');
*/