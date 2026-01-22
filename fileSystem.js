const fs = require("fs").promises;
const {promisify} = require("util");
const readFileAsync = promisify(require('fs').readFile);


fs.writeFile("daksh.txt", "Today we re learning file system",(error)=>{
    if(error){
        console.log("Error is creating file")
    }else{
        console.log("File is created")
    }
})

// fs.readFile("daksh.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("Error is loading")
//     }else{
//         console.log("File Data: ",data)
//     }
// })

async function readFile(){
    try{
        const data = await fs.readFile("daksh.txt", "utf-8")
        console.log("File Content", data)
    }catch (error){
        console.error("Error in files content" , error)
    }
}

readFile();

async function readWithPromisify(){
    try{
        const data = await readFileAsync("daksh.txt", "utf-8");
        console.log(data)
    }catch(error){
        console.log(error);
    }
}

readWithPromisify();