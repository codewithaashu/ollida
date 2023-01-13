const express = require("express");
const followers = require('instagram-followers');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render("index",{followers: ""});
})
app.post("/getFollowers",(req,res)=>{
    console.log(req.body.username);
    followers(req.body.username).then(no=>{
        console.log(no+"h");
        });
})
app.listen(4000,()=>{
    console.log("Connection sucessfully")
})