import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { TextField } from '@mui/material/';
import Button from '@mui/material/Button';
//import Snackbar from '@mui/material/Snackbar';
//import Alert from "@mui/material/Alert";
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';



const myStyle = makeStyles({
    formmain: {
        display:"flex",
        flexDirection:"column",
        
    },
});
const RegisterCards = () => {
    const classes = myStyle();
    const history=useHistory();
    const [user, setUser] = useState({
    Name:"",Mobilenumber:"",Email:"",Password:""
    });
        
        let name,value
    const handleClick=(e)=>{
        
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    const postdata= async (e)=>{
        e.preventDefault();
        const {Name,Mobilenumber,Email,Password}=user;
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Name,Mobilenumber,Email,Password
            })
        });
        const data = await res.json();
        if(data.status === 422|| !data){
            window.alert("invalid registeration");
            console.log("invalid registeration");
        }else{
            window.alert(" registeration sucessfull");
            console.log(" registeration sucessfull");
            history.push("/login");
        }
    }

    
    
      
    return (
        <>
        <Card  sx={{ maxWidth: 375, }} elevation={5}>
                    
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} >
                                    M
                                </Avatar>}
                            title={
                                <Typography sx={{ fontSize: 20, fontWeight: "bold"}}>Sign Up</Typography>
                            }
                            subheader="to continue with google.com" />
                        <CardContent >
                            <form  method="POST" className={classes.formmain} noValidate autoComplete="off">
                                <TextField 
                                name="Name"
                                style={{marginBottom:10}}  
                                variant="standard" 
                                id="standard-hidden-Label" 
                                color="error" 
                                label="Enter your Name"
                                size="small"
                                value={user.Name}
                                onChange={handleClick} />

                                <TextField 
                                name="Mobilenumber"
                                style={{marginBottom:10}} 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Mobile No."
                                size="small"
                                value={user.Mobilenumber}
                                onChange={handleClick}
                               
                                 />
                                
                                <TextField
                                name="Email"  
                                style={{marginBottom:10}} 
                                type="email" 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Email "
                                size="small"
                                value={user.Email}
                                onChange={handleClick}
                                 />
                                
                                <TextField  
                                name="Password"
                                style={{marginBottom:10}}  
                                type="password" 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Password " 
                                size="small"
                                value={user.Password}
                                onChange={handleClick}
                                />
                                
                                <Button 
                                
                                style={{marginTop:10,backgroundColor:"#E21717"}}
                                type="submit" 
                                 variant="contained"
                                 onClick={postdata}
                                 >Next</Button>
                            </form>
                            <CardActions>
                            <Button  color="error" size="small">more options</Button>
                            
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
