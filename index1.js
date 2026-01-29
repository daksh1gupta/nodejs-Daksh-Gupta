const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("This is a my home page updated");
});

app.get("/view", (req,res)=>{
    res.send("This is view page");
});

app.get("/lms",(req,res)=>{
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send("Form submitted");
});

app.listen(port,()=>{
    console.log(`Server is up${port}`);
})