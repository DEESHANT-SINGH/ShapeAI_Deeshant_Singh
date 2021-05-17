const express = require("express");    // to import express module
            
const bodyParser = require("body-parser");   // to import body parser

const app = express();     // creating a variable app to call a function express()

app.use(bodyParser.urlencoded({extended: true}))     

//when browser send Get / request
app.get("/", function(req, res){                   // / = homepage    request and respond    when we do --> localhost:3000
    res.sendFile(__dirname+"/index.html");         // to send file to browser  // if file is in same folder we do not need to give path just give --> __dirname+"/file_name_is_same__server_folder"
});                                                // .send() to send a particular line   // .sendFile() to send a particular file                 // __dirname is use to find present file path like pwd

//when browser sends post / resquest            here post / request is generated due to button type="submit"
app.post("/", function(req, res) {             // in cmd do --> npm install body parser --> body parser will help us to take the data comming from the website i.e num1 and num2 data and we have to parse it and use it
    var n1 = Number(req.body.num1);                    // we can access in terminal, what user puts input for num1 in browser 
    var n2 = Number(req.body.num2);                    // To access num2 from browser when user inputs it
    var result = n1+n2;
    res.send("The answer is " + result);
});

app.listen(3000, function(){      // we are telling app to listen to the particular port  & we are pushing a particular function inside it
    console.log("Server has started on port 3000");
});