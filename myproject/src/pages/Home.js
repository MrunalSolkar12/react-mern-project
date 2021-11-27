import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Button,Box} from '@mui/material/';
import login from "./login";
import register from "./register";
import  RegisterCards from "../components/RegisterCards";
import LoginCards from "../components/LoginCards";



const Home = () => {
    return (
        <>
       <div style={{height:"100vh"}}>
            <Box>
            <AppBar>
                <Toolbar >
                    <Button variant="outline" href="http://localhost:3000/register" >Register</Button>
                    <Button variant="outline" href="http://localhost:3000/login" >Login</Button>
                </Toolbar>
                </AppBar>
                </Box>

                
                <Typography style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:400}} variant="h2" color="blue">Welcome to Mern Project</Typography>
                
            
                
                
       
        
        </div>
        </>
    )
}

export default Home
