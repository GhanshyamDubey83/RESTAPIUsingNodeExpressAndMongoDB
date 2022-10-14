//declration & initillization of the following variables to get the installed dependancies.
const express=require("express");
const mongoose=require("mongoose");
const dbURL="mongodb://localhost:27017/BookInformation";
const app=express();


//Now Connecting to the database and to avoid any warning if any of the following function/declration are deprecated 

mongoose.connect(dbURL,{useNewURLParser:true});
const con=mongoose.connection;
con.on("open",function(){
    console.log("DB is open to be used");
});
//we are informing express that we will pass Json as input by using the below statement.
//also to avoid following following error."TypeError: Cannot read properties of undefined (reading 'name')"
app.use(express.json());
//Importing the newly created js file also know as HP_Bookes.js
const importRoute=require("./HPBooksRoutes");

//following is going to handel the upcoming request and redirect that request to the router in our case HP_Bookes
app.use("/HPBooksRoutes",importRoute);

//just for my understanding about anonymouse function which i have created in the 
//following line we can redefined the same in the following manner "app.listen(7474, ()=>{});"
//If we get any error related to port is being used please use following cmd to kill all the node js related process 
//which might be blocking the port "taskkill /F /IM node.exe"
app.listen(7474,function(){
   console.log("Server started..");   
});