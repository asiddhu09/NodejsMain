const express = require('express');

const app = express();

const port = 8000;

//Home Page

app.get("/", (req, res)=>{

    res.send("Welcome to the page of server 1")
})

//About US page
app.get("/aboutUs", (req, res)=>{

    res.send("Welcome to about us page")
})

//Contact us page

app.get("/contact", (req, res)=>{

    res.send("Welcome to contact us page")
})

app.listen(port, (error)=>{
if(!error)
console.log("Running at :", port);

else
console.log("Ohh Error");

})
