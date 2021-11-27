import React, { useState,useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { TextField } from '@mui/material/';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useHistory, } from 'react-router';
import emailjs from "emailjs-com";



const myStyle = makeStyles({
    formmain: {
        display: "flex",
        flexDirection: "column",

    },
});
const RegisterCards = () => {
    const history=useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const loginuser= async (e)=>{
        e.preventDefault();
        const res= await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               Email,Password
            })
        });
        const data = await res.json();
        console.log(data);
        if(res.status === 400|| !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert(" login sucessfull");
            console.log(" login sucessfull");
            history.push("/Home");
            sendEmail();
        }
    }
    
    var templateParams = {
        name:"Mrunal",
        email:Email,
        messagetitle:"This is Mrunal",
        messagepara:"Welcome to Mrunal Website.This is a Register-Login application where  if the user is  newto the website the user have to first register then have to login to enter to the HomeScreen. after userlogin successfully the user will receive a welcome email to the user email."
    };
    const sendEmail=(e)=>{
       
        emailjs.send(
            "service_cxavqbc",
            "template_gmpmz1w",
            templateParams,
            "user_vL8LxTPMb2xuRgtx29yib"
        ).then((res)=>{console.log(res.text);})
        .catch((err)=>{console.log(err.text);})
    }
    
    const classes = myStyle();
    return (
        <>
        <Card sx={{ maxWidth: 375, }} elevation={5}>

            <CardHeader style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} >
                        M
                    </Avatar>}
                title={
                    <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Typography>
                }
                subheader="to continue with google.com" />
            <CardContent >
                <form  method="post"  className={classes.formmain} onSubmit={loginuser}  noValidate autoComplete="off">




                    <TextField
                        
                        style={{ marginBottom: 10 }}
                        type="email"
                        variant="standard"
                        id="standard-basic"
                        color="error"
                        label="Enter Your Email "
                        size="small" 
                        name="email"
                        value={ Email}
                        onChange={(e)=>{setEmail(e.target.value)}}/>

                    <TextField
                       
                        style={{ marginBottom: 10 }}
                        type="password"
                        variant="standard"
                        id="standard-basic"
                        color="error"
                        label="Enter Your Password "
                        size="small" 
                        name="password"
                        value={Password}
                        onChange={(e)=>{setPassword(e.target.value)}}/>

                    <Button
                        style={{ marginTop: 10, backgroundColor: "#E21717" }}
                        type="submit"
                        variant="contained"
                       >Next</Button>
                    </form>


                <CardActions style={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography marginBottom={5} variant="body3" color="error">
                        <a style={{textDecoration:"none",color:"red"}}
                        
                        href="#">
                        Forget email?</a>
                    </Typography>
                    <Button style={{ textTransform: "lowercase" }} color="error" size="small">more options</Button>
                </CardActions>
            </CardContent>

        </Card>
        <div style={{display:"flex" ,flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
        <Typography fontSize={15} >Help</Typography>
        <Typography fontSize={15}>Privacy</Typography>
        <Typography fontSize={15}>Terms</Typography>
        </div>
</>
    )
}

export default RegisterCards;
