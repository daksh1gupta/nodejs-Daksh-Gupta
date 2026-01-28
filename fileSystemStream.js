// Read only data 

    // const {Readable} = require("stream");
    // const instream = new Readable({
    //     read(){

    //     }
    // });
    // instream.push("Welcome to file stream session\n");
    // instream.push("Every one need to contribute inside the class");

    // instream.push(null);

    // instream.pipe(process.stdout);

// Write a data

    const { Writable } = require("stream");
    const outstream = new Writable({
        write(chunk, encoding, call){
            console.log(chunk.toString());
            call();
        }
    });

    process.stdin.pipe(outstream);