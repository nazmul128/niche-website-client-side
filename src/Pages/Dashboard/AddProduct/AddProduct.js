import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';



const AddProduct = () => {
    return (
        <Container>
           
        <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid sx={{mt:8}} item xs={12} md={6}>
    <Typography sx={{fontWeight:600}} variant="h4" gutterBottom>
    Add a Product
  </Typography>
  <form>
  <TextField 
  sx={{width:'75%', m:1}}
  id="standard-img" 
  label="Image Url"
  type="img"
  name="img"
 
  variant="standard" />
 <TextField 
  sx={{width:'75%', m:1}}
  id="standard-name" 
  label="Name"
  name="name"
  type="name"

  variant="standard" />
  <br/>

  <TextField
  sx={{width:'75%', m:1}}
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          rows={4}
          multiline
          variant="standard"
        />
         <TextField 
  sx={{width:'75%', m:1}}
  id="standard-rating" 
  label="Rating"
  name="rating"
  type="rating"
  variant="standard" />
  <br/>

  <NavLink style={{ textDecoration:'none'}}  to='/login'>
  <Button  sx={{width:'50%', mt:2}} type='submit' variant="contained">Add a Product</Button>
  </NavLink>

  </form>
    </Grid>
    
  </Grid>
</Box>
        </Container>
     
    );
};

export default AddProduct;