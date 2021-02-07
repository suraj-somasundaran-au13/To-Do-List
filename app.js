//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //for the external js file date.js
//requiring the three modules;

const app = express();
// using the app and express;

const items = ["Buy food","Cook food","Eat food"];
const workItems = [];
//Adding the basic items on the front page;

app.set('view engine', 'ejs');
//To set the ejs template and to use EJs

app.use(bodyParser.urlencoded({extended:true}));
//Must and should use compulsory for bady-parser to read
app.use(express.static("public"));
//to use the local files and  access the server and read 


app.get("/", function(req, res){    //to get the data to display on the page
let day = date.getDate();          //refer date.js
   res.render("list", {listTitle : day, newListItems : items});   // to get from list.ejs and the specific key(listTitle and newListItems
});

app.post("/",function(req,res){ //to create the data and put the data from webpage to server
    var item = req.body.newItem;  //from the input in list.ejs read from the name and get the data and save what we type in item

    if(req.body.list === "Work"){  // to see if the new item that came from was from /work or /list
      workItems.push(item);  //push the item to workItems array
      res.redirect("/work");  //to redirect back to the work page after submiting
    }else{   
    items.push(item); // push it to the array
    res.redirect("/"); // to redirect back to the page. 
    }

})

app.get("/work",function(req,res){   //if it is localhost3000://work
  res.render("list", {listTitle : "Work list", newListItems : workItems} ) //to read from list.ejs and add the 
})

app.get("/about",function(req,res){  //for the about page in about.ejs
  res.render("about" )  //to give about the about page
})

app.listen(3000, function(){   //to set up a server 
  console.log("Server started on port 3000.");
});
