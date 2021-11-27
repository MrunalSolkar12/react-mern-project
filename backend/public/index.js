const express= require("express");
const app= express();
const mongoose=require("mongoose");
const usermodel=require("./model");
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(require("./auth"));


const data="mongodb+srv://mrunal:mrunal@cluster0.emljc.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(data).then(()=>{
    console.log("connection started");
}).catch(()=>{
    console.log("no connection");
})

app.listen(PORT,"127.0.0.1",()=>{
    console.log("server started");
})

