const express = require('express');
const path =require('path')
// to create express application we need to create express function 
const app = express();
// to create routing 
// app.get(route, callback);

const staticpath =(path.join(__dirname, "/public/news"))
console.log(path.join(__dirname, "/public"))
app.use(express.static(staticpath))
// app.get("/", (req, res)=>{
// res.send("hello from the express");
// })
// console.log(__dirname);
// app.get("/about", (req, res)=>{
// res.send("hello from the About express")
// })
app.listen(8000, ()=>{
    console.log("listening the port number 8000")
})

// API;
// get - read 
// post - create ;
// put - update ;
// delete - delet 

// the callback function has 2 parameters , request(req) and response(res).

// the request object represents the HTTP request and has propertir=es for the request query , string , parameters , body , http headers etc.

// similarly , the response obhext the http response that the express app sends when it receive an http requeest 