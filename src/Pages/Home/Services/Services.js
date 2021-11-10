import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services=[
    {
      name:'CAMPRO CB-RX700C CCTV CAMERA',
      description:` 1/3" Pixelplus CMOS sensor.700TVL / 0.1Lux / IR Cut Filter.30pcs IR LED`,
      // img:service7,
      img:'https://i.ibb.co/h88LM7r/service7.png',
      price:3000,
      rating:4,
    },
    {
      name:'CAMPRO CB-FE100S CCTV CAMERA',
      description:'Image Sensor: 1/3.5″ CMOS.Resolution: 800TVL.Lens: 4/6/8/12/16/250mm',
      img:'https://i.ibb.co/872DXBz/service11.png',
      price:7500,
      rating:5
    },
    {
      name:'CAMPRO CB-RQ800 CCTV CAMERA',
      description:'1/3" Fulhan CMOS.800TVL / 0.1Lux /IR Cut Filter.Resolution: 700TVL.Lens: 4/6/8/12/16/250mm',
      img:'https://i.ibb.co/fHf8PSv/service10.png',
      price:3800,
      rating:4
    },
    {
        name:'Xiaomi Mi iSC5 CCTV Camera ',
        description:'1/2.7CMOS Sensor.8x Digital Zoom.Two-way audio communication.Intelligent detection',
        img:'https://i.ibb.co/h88LM7r/service7.png',
       price:1699,
       rating:5
    },
    {
        name:'Hikvision DS-2CE16D7T CCTV Camera',
        description:'2 Megapixel high-performance CMOS.Analog HD output, up to 1080P resolution.2.8-12mm motorized vari-focal lens.',
       img:'https://i.ibb.co/y4SVJ9V/service8.png',
       price:5400,
       rating:4
    },
    {
      name:'CAMPRO CB-VB800 CCTV CAMERA',
      description:'1/3" Fulhan CMOS.800TVL / 0.1Lux / IR Cut Filter.30pcs IR LED.2.8-12mm motorized vari-focal lens.',
      img:'https://i.ibb.co/4JTvx9k/service9.png',
      price:4000,
      rating:5
    }
  ]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my:4 }}>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
       Services
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service=><Service
               key={service.name}
                service={service}
             ></Service>)
        }
      </Grid>
    </Box>
    );
};

export default Services;