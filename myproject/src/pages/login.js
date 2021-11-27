import React from 'react';
import LoginCards from "../components/LoginCards";
import Grid from '@mui/material/Grid';


//main file
const Login = () => {

    
    
    return (
        
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center"
            marginY={12}
            
            >
            <Grid item md={3}>
                <LoginCards/>
            </Grid>
        </Grid>
       

    )
}

export default Login;
