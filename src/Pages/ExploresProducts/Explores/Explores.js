import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import service13 from '../../../Images/services/service13.png' 
import service14 from '../../../Images/services/service14.png' 
import service15 from '../../../Images/services/service15.png' 
import service16 from '../../../Images/services/service16.png' 
import service17 from '../../../Images/services/service17.png' 
import service18 from '../../../Images/services/service18.png' 
import service19 from '../../../Images/services/service19.png' 
import service20 from '../../../Images/services/service20.png' 
import service21 from '../../../Images/services/service21.png' 
import service22 from '../../../Images/services/service22.png' 
import service23 from '../../../Images/services/service23.png' 
import service24 from '../../../Images/services/service24.png' 
import service25 from '../../../Images/services/service25.png' 
import service26 from '../../../Images/services/service26.png' 
import service27 from '../../../Images/services/service27.png' 
import service28 from '../../../Images/services/service28.png' 
import Explore from '../Explore/Explore';

const explores=[
    {
      name:'Jovision JVS-N410-YWS H.265 4MP Network Camera',
      description:`Image Sensor 1/3" 4MP CMOS Sensor Resolution 4MP Effective Pixels 2592*1520 Compression H.265/H.264/JPEG/AVID`,
      img:service13,
      price:4900,
      rating:5,
    },
    {
      name:'Hikvision DS-2CE56C0T-IRPF HD 720p Indoor IR Turret Camera',
      description:'4 in 1 (4 signals switchable TVI/AHD/CVI/CVBS) HD 720p turret camera Smart IR: up to 20 m IR distance 1 megapixel high performance CMOS',
      img:service14,
      price:1200,
      rating:3
    },
    {
      name:'Hikvision DS-2CE56C0T-IRF 1MP HD IR Fixed Turret Camera',
      description:'HD 720p turret camera Smart IR: up to 20 m IR distance Water and dust resistance (IP66) 4 signals switchable TVI/AHD/CVI/CVBS',
      img:service15,
      price:1300,
      rating:2
    },
    {
        name:'Dahua-HAC-T1A21P 2MP HDCVI IR Eyeball camera',
        description:'Resolution: 2MP Lens: 3.6mm Fixed IR Distance: 20m',
       img:service16,
       price:1425,
       rating:4
    },
    {
        name:'Dahua HAC-HDW-1200RP 2MP DOME IR Eyeball Camera',
        description:'Sensor: 1/2.7″ CMOS, ICR Lens: 3.6mm IR Range: Up to 20m',
       img:service17,
       price:1450,
       rating:5
    },
    {
      name:'Dahua DH-HAC-HFW1209CP-A-LED 2MP HDCVI IR Bullet Camera',
      description:'Max. 30fps@1080P HD and SD output switchable 3.6mm fixed lens Smart 20m IR',
      img:service18,
      price:2100,
      rating:4
    },
    {
      name:'Dahua HAC-B1A21P 2MP HDCVI IR Bullet Camera',
      description:'Max. 30fps@1080P HD and SD output switchable 3.6mm fixed lens Smart 20m IR',
      img:service19,
      price:1500,
      rating:4
    },
    {
      name:'Dahua HAC-T2A21P 2MP HDCVI IR Eyeball Dome Camera (Metal Body)',
      description:'3.6mm fixed lens Max. 30fps@1080P Max. IR length 20m, Smart IR HD and SD output switchable',
      img:service20,
      price:1650,
      rating:4
    },
    {
      name:'Hikvision DS-2CE56D0T-IRPF 2 MP Indoor Fixed Turret Dome Camera',
      description:'4 in 1 (4 signals switchable TVI/AHD/CVI/CVBS) 2 MP Turret Camera HD Output: up to 1080p Smart IR: up to 20m distance',
      img:service21,
      price:1750,
      rating:4
    },
    {
      name:'HikVision DS-2CE16D0T-IRPF Indoor Bullet CC Camera',
      description:'Sensor: 2 MP CMOS image sensor Lens: 3.6 mm 1080P horizontal resoluation IR Range: 20m',
      img:service22,
      price:1800,
      rating:5
    },
    {
      name:'TVT TD-7420AS1 2MP HD IR Water-proof Dome Camera',
      description:'Up to 1000 TVL Resolution Noise Reduction Function Support ICR switch True Day/ Night',
      img:service23,
      price:1800,
      rating:5
    },
    {
      name:'Hikvision DS-2CE16C0T-IT3F 1MP Fixed Bullet Camera',
      description:'EXIR 2.0: advanced infrared technology, 40m IR distance Water and dust resistant (IP66) HD 720p bullet camera 4 signals: TVI/ AHD/ CVI/ CVBS',
      img:service24,
      price:2050,
      rating:3
    },
    {
      name:'HikVision DS-2CE71D0T-PIRL 2MP PIR Fixed Turret Camera',
      description:'EXIR 2.0: advanced infrared technology PIR detection and strobe light alarm Water and dust resistant (IP67) 2MP PIR turret camera, 20m IR distance',
      img:service25,
      price:2100,
      rating:5
    },
    {
      name:'Hikvision DS-2CE11D0T-PIRL 2MP PIR Fixed Mini Bullet Camera',
      description:'EXIR 2.0: advanced infrared technology PIR detection and strobe light alarm Water and dust resistant (IP67) 2 MP PIR bullet camera, IP67',
      img:service26,
      price:2150,
      rating:4
    },
    {
      name:'Hikvision DS-2CE16C0T-IT3F 1MP Fixed Bullet Camera',
      description:'Capturing images in ultra-low light down to 0.005 lux EXIR 2.0: advanced infrared technology 3D DNR technology, 30m IR distance Strong night performance',
      img:service27,
      price:2250,
      rating:5
    },
    {
      name:'Dahua HAC-HDW1200EMP 2MP HDCVI IR Eyeball Camera without Audio',
      description:'Built-in mic IP67, DC12V Max 30fps@1080P Max. IR length 50m, Smart IR',
      img:service28,
      price:2300,
      rating:4
    }
  ]


const Explores = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1, my:4 }}>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
       Services
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            explores.map(explore=><Explore
               key={explore.name}
               explore={explore}
             ></Explore>)
        }
      </Grid>
    </Box>
        </div>
    );
};

export default Explores;