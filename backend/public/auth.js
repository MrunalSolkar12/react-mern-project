const express= require("express");
const app= express();
const router=express.Router();
const usermodel=require("./model");




router.get("/register",(req,res)=>{
    res.send("register page");
})

router.post("/register",(req,res)=>{
    const {Name,Mobilenumber,Email,Password}=req.body;

    if (!Name|| !Mobilenumber|| !Email|| !Password){
        res.json({error:"plz filled the form properly"});
    }
    usermodel.findOne({Email:Email}).
    then((userexist)=>{
        if(userexist){
            res.status(200).json({message:"user exist"});
        }

        const user=new usermodel({Name,Mobilenumber,Email,Password});
        user.save().then(()=>{
            res.status(200).json({message:"user register succesfully"});
        }).catch(()=>{
            res.status(400).json({message:"registeration failed"});
        })
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

router.get("/login",(req,res)=>{
    res.send("login page");
})

router.post("/login",async (req,res)=>{
    const {Email,Password}=req.body;

    if(!Email || !Password){
        res.status(400).json({error:"one of the filled is empty"});
    }


 const userlogin=  await usermodel.findOne({Email:Email})

    if (!userlogin){
        res.status(400).json({message:"invalid email id"});
    }
    
 if(userlogin.Password==Password ){
     res.status(200).json({message:"login successfully"});
 }
 else{
     res.status(400).json({message:"login unsuccessfull"});
 }

})



module.exports=router;