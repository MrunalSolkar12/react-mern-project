import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { Paper, TextField } from '@mui/material/';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';



const Registercardcopy = () => {

    const history=useHistory();
    const [user, setUser] = useState({
    Name:"",Mobilenumber:"",Email:"",Password:""
    });
        
        let name,value
    const handleclick=(e)=>{
        
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    


    return (
        <Box  display="flex" flexDirection="column" alignItems="stretch" padding={1}>
            <Paper elevation={5}>
                <Typography  color="red">{user}</Typography>
    <form  method="POST"  noValidate autoComplete="off">
                                <TextField 
                                name="Name"
                                style={{marginBottom:10}}  
                                variant="standard" 
                                id="standard-hidden-Label" 
                                color="error" 
                                label="Enter your Name"
                                size="small"
                                onChange={handleclick}
                                value={user.Name}
                                 />

                                <TextField 
                                name="Mobilenumber"
                                style={{marginBottom:10}} 
                                variant="standard" 
                                id="standard-basic" 
                                color="error" 
                                label="Enter Your Mobile No."
                                size="small"
                                value={user.Mobilenumber}
                               
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
                                />
                                
                                <Button 
                                
                                style={{marginTop:10,backgroundColor:"#E21717"}}
                                type="submit" 
                                 variant="contained"
                                 
                                 >Next</Button>
                            </form>
                            </Paper>
  </Box>
    )
}

export default Registercardcopy;
