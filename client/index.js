const express = require('express');
const app = express();
const path = require ('path');
app.use(express.static("D:/Fitness&Wellness/client/Public"));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.listen(3000, function(){

})