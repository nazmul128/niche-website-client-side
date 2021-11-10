import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import aboutImg from '../../../Images/about-img.jpg'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const About = () => {
    return (
       <Container>
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
        <img 
        style={{width:"400px"}}
        src={aboutImg} alt=""/>
          </Grid>
          <Grid sx={{textAlign:'left', mt:4}} item xs={12} sm={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
        About
      </Typography>
          <Typography sx={{fontWeight:600, my:3, mr:3}} variant="h4" gutterBottom component="div">
          We Provide Service with 10 Years Experience
      </Typography>
        
      <Typography sx={{my:2}} variant="body1" gutterBottom>
      Unto moved life, form fowl give fourth under his place signs which can’t be open they’re make from i were it moveth morning. Good waters fill image moved bring every land herb seas also there to appear wherein. Their moving grass. It moving very let doesn’t.
      </Typography>
      <Typography sx={{fontWeight:700, color:'gray'}} variant="h5" gutterBottom component="div">
      For Emergency Fixing or Appointment
      </Typography>
      <Typography sx={{fontWeight:600}} variant="h5" gutterBottom component="div">
     01840763872
      </Typography>

          </Grid>
         
        </Grid>
      </Box>
       </Container>
    );
};

export default About;