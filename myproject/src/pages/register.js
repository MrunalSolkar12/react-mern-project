import React from 'react';
import  RegisterCards from "../components/RegisterCards";
import  Registercardcopy from "../components/Registercardcopy";
import Grid from '@mui/material/Grid';



//main file
const Register = () => {

    
    
    return (
        
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center"
            marginY={12}
            
            >
            <Grid item md={3}>
                <RegisterCards/>
            </Grid>
        </Grid>
       

    )
}

export default Register;
