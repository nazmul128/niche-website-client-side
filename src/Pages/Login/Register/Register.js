import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';



const Register = () => {
    const [loginData,setLoginData]=useState({})
    const{user,registerUser,isLoading,authError}=useAuth()

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={ ...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
      if(loginData.password !== loginData.password2){
        alert('Password did not match');
      }

      registerUser(loginData.email, loginData.password);
      e.preventDefault();
    }

    return (
      
        <Container>
           
        <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid sx={{mt:8}} item xs={12} md={6}>
    <Typography variant="body1" gutterBottom>
    Register
  </Typography>
  {isLoading&&<form onSubmit={handleLoginSubmit}>
  <TextField 
  sx={{width:'75%', m:1}}
  id="standard-basic" 
  label="Your Name"
  type="name"
  name="name"
  onBlur={handleOnBlur} 
  variant="standard" />

 <TextField 
  sx={{width:'75%', m:1}}
  id="standard-basic" 
  label="Your Email"
  name="email"
  type="email"
  onBlur={handleOnBlur} 
  variant="standard" />
  <br/>

    <TextField
    sx={{width:'75%', m:1}}
    id="standard-basic"
    label="Your Password"
    type="password"
    name="password"
    onBlur={handleOnBlur} 
    variant="standard"
  />

    <TextField
    sx={{width:'75%', m:1}}
    id="standard-basic"
    label="Re-Enter Your Password"
    type="password"
    name="password2"
    onBlur={handleOnBlur} 
    variant="standard"
  />
  <NavLink style={{ textDecoration:'none'}}  to='/login'>
  <Button  sx={{width:'75%', m:1}} type='submit' variant="text">Already Registered? Please Login</Button>
  </NavLink>
  <Button  sx={{width:'75%', m:1}} type='submit' variant="contained">Register</Button>

  </form>}
  {isLoading&&<CircularProgress />}
      {user?.email && <Alert severity="success">User Created Successfully</Alert>
}
{
  authError &&   <Alert severity="error">{authError}</Alert>
}
 
    </Grid>
    <Grid item xs={12} md={6}>

    </Grid>
    
  </Grid>
</Box>
        </Container>
    );
};

export default Register;