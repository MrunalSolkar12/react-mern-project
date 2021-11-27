const mongoose= require('mongoose');

const userschema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Mobilenumber:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    }
})

const usermodel= new mongoose.model("usermodel",userschema);

module.exports=usermodel;