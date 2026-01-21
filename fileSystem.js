const fs = require("fs");
// fs.writeFile("daksh.txt", "Today we re learning file system",(error)=>{
//     if(error){
//         console.log("Error is creating file")
//     }else{
//         console.log("File is created")
//     }
// })

fs.readFile("daksh.txt","utf-8",(error,data)=>{
    if(error){
        console.log("Error is loading")
    }else{
        console.log("File Data: ",data)
    }
})