var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStartup () {
    console.log("Express Server running on port " + HTTP_PORT);
}

// create a route that indicates what we do when the person navigates to the root folder
/* 
app.get("/", function(req, res){
    res.send("Hello World<br/><a href='/about'>Go to the about page</a>");
});
*/
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("home", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/BecomeAHost", function(req, res){
    res.sendFile(path.join(__dirname, "/views/BecomeAHost.html"));
});

app.get("/4", function(req, res){
    res.sendFile(path.join(__dirname, "/views/4.html"));
});
app.get("/5", function(req, res){
    res.sendFile(path.join(__dirname, "/views/5.html"));
});
app.get("/6", function(req, res){
    res.sendFile(path.join(__dirname, "/views/6.html"));
});
app.get("/7", function(req, res){
    res.sendFile(path.join(__dirname, "/views/7.html"));
});
app.get("/8", function(req, res){
    res.sendFile(path.join(__dirname, "/views/8.html"));

});
app.get("/9", function(req, res){
    res.sendFile(path.join(__dirname, "/views/9.html"));
});

app.use(express.static("public"));


// setup  the listener
app.listen(HTTP_PORT, onHttpStartup);