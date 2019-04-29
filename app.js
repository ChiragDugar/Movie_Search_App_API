var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("form");
})

app.get("/results",function(req,res){
    var x = req.query.search;
    request("http://omdbapi.com/?s=" + x + "&apikey=1ea7e802",function(error,response,body){
        if(!error && response.statusCode==200)
        {
            var data = JSON.parse(body);
            res.render("results",{data:data});
        }
    })
})


app.listen(3000,function(){
    console.log("The server is up");
})