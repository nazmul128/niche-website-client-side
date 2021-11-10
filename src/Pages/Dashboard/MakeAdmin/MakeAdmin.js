import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useAuth from './../../../hooks/useAuth';


const MakeAdmin = () => {
    return (
        <div>
        <h1>Make An Admin</h1>     
        <form >
        <TextField 
        sx={{width:'50%'}}
        label="Email"
        type="email"
        
        variant="standard" 
        />
        
        <Button type='submit' variant="contained">Make Admin</Button>
 
        </form>
       
         </div>
    );
};

export default MakeAdmin;