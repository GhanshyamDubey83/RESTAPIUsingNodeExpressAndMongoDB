const mongoose=require("mongoose");

const books=mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   img:{
       type:String
   },
   summary:{
    type:String,
    require:true
   }

});

module.exports=mongoose.model("BOOKS",books);

