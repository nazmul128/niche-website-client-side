import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';



const Service = (props) => {
    const {name,description,img,rating,price}=props.service;
    return (
        <Grid  item xs={4} sm={4} md={4}  >
           <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
           <CardMedia
        component="img"
        style={{
          width:'450px', 
          height:'300px', 
          margin:'0 auto'
        }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
        
        <Typography sx={{mx:3, my:2}} variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography sx={{ mb:2}}  variant="h5" component="div">
         Tk.{price}
        </Typography>
        <Typography sx={{mx:3}} variant="body2" color="text.secondary">
        <Rating name="read-only" value={rating} readOnly />
        </Typography>
      </CardContent>
      <Button variant="contained">Buy Now</Button>

     
    </Card>
        </Grid>
    );
};

export default Service;