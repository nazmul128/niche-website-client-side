import React,{useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore';
import { useEffect } from 'react';
import Footer from './../../Home/Footer/Footer';

// const explores=[
//     {
//       key:'1',
//       name:'Jovision JVS-N410-YWS H.265 4MP Network Camera',
//       description:`Image Sensor 1/3" 4MP CMOS Sensor Resolution 4MP Effective Pixels 2592*1520 Compression H.265/H.264/JPEG/AVID`,
//       img:'https://i.ibb.co/tZNSRTp/service13.png',
//       price:4900,
//       rating:5,
//     },
//     {
//       key:'2',
//       name:'Hikvision DS-2CE56C0T-IRPF HD 720p Indoor IR Turret Camera',
//       description:'4 in 1 (4 signals switchable TVI/AHD/CVI/CVBS) HD 720p turret camera Smart IR: up to 20 m IR distance 1 megapixel high performance CMOS',
//       img:'https://i.ibb.co/2KFjWXv/service14.png',
//       price:1200,
//       rating:3
//     },
//     {
//       key:'3',
//       name:'Hikvision DS-2CE56C0T-IRF 1MP HD IR Fixed Turret Camera',
//       description:'HD 720p turret camera Smart IR: up to 20 m IR distance Water and dust resistance (IP66) 4 signals switchable TVI/AHD/CVI/CVBS',
//       img:'https://i.ibb.co/9GGLBhg/service15.png',
//       price:1300,
//       rating:2
//     },
//     {
//       key:'4',
//         name:'Dahua-HAC-T1A21P 2MP HDCVI IR Eyeball camera',
//         description:'Resolution: 2MP Lens: 3.6mm Fixed IR Distance: 20m',
//        img:'https://i.ibb.co/9NR21Hz/service16.png',
//        price:1425,
//        rating:4
//     },
//     {
//       key:'5',
//         name:'Dahua HAC-HDW-1200RP 2MP DOME IR Eyeball Camera',
//         description:'Sensor: 1/2.7″ CMOS, ICR Lens: 3.6mm IR Range: Up to 20m',
//        img:'https://i.ibb.co/W22xWCb/service17.png',
//        price:1450,
//        rating:5
//     },
//     {
//       key:'6',
//       name:'Dahua DH-HAC-HFW1209CP-A-LED 2MP HDCVI IR Bullet Camera',
//       description:'Max. 30fps@1080P HD and SD output switchable 3.6mm fixed lens Smart 20m IR',
//       img:'https://i.ibb.co/WpM1d76/service18.png',
//       price:2100,
//       rating:4
//     },
//     {
//       key:'7',
//       name:'Dahua HAC-B1A21P 2MP HDCVI IR Bullet Camera',
//       description:'Max. 30fps@1080P HD and SD output switchable 3.6mm fixed lens Smart 20m IR',
//       img:'https://i.ibb.co/CMxvFcB/service19.png',
//       price:1500,
//       rating:4
//     },
//     {
//       key:'8',
//       name:'Dahua HAC-T2A21P 2MP HDCVI IR Eyeball Dome Camera (Metal Body)',
//       description:'3.6mm fixed lens Max. 30fps@1080P Max. IR length 20m, Smart IR HD and SD output switchable',
//       img:'https://i.ibb.co/Msy9B8Q/service20.png',
//       price:1650,
//       rating:4
//     },
//     {
//       key:'9',
//       name:'Hikvision DS-2CE56D0T-IRPF 2 MP Indoor Fixed Turret Dome Camera',
//       description:'4 in 1 (4 signals switchable TVI/AHD/CVI/CVBS) 2 MP Turret Camera HD Output: up to 1080p Smart IR: up to 20m distance',
//       img:'https://i.ibb.co/68DZ8d4/service21.png',
//       price:1750,
//       rating:4
//     },
//     {
//       key:'10',
//       name:'HikVision DS-2CE16D0T-IRPF Indoor Bullet CC Camera',
//       description:'Sensor: 2 MP CMOS image sensor Lens: 3.6 mm 1080P horizontal resoluation IR Range: 20m',
//       img:'https://i.ibb.co/m9SJq3n/service22.png',
//       price:1800,
//       rating:5
//     },
//     {
//       key:'11',
//       name:'TVT TD-7420AS1 2MP HD IR Water-proof Dome Camera',
//       description:'Up to 1000 TVL Resolution Noise Reduction Function Support ICR switch True Day/ Night',
//       img:'https://i.ibb.co/DRg2bVh/service23.png',
//       price:1800,
//       rating:5
//     },
//     {
//       key:'12',
//       name:'Hikvision DS-2CE16C0T-IT3F 1MP Fixed Bullet Camera',
//       description:'EXIR 2.0: advanced infrared technology, 40m IR distance Water and dust resistant (IP66) HD 720p bullet camera 4 signals: TVI/ AHD/ CVI/ CVBS',
//       img:'https://i.ibb.co/7QX78rm/service24.png',
//       price:2050,
//       rating:3
//     },
//     {
//       key:'13',
//       name:'HikVision DS-2CE71D0T-PIRL 2MP PIR Fixed Turret Camera',
//       description:'EXIR 2.0: advanced infrared technology PIR detection and strobe light alarm Water and dust resistant (IP67) 2MP PIR turret camera, 20m IR distance',
//       img:'https://i.ibb.co/yRQ24hb/service25.png',
//       price:2100,
//       rating:5
//     },
//     {
//       key:'14',
//       name:'Hikvision DS-2CE11D0T-PIRL 2MP PIR Fixed Mini Bullet Camera',
//       description:'EXIR 2.0: advanced infrared technology PIR detection and strobe light alarm Water and dust resistant (IP67) 2 MP PIR bullet camera, IP67',
//       img:'https://i.ibb.co/6XMyWPm/service26.png',
//       price:2150,
//       rating:4
//     },
//     {
//       key:'15',
//       name:'Hikvision DS-2CE16C0T-IT3F 1MP Fixed Bullet Camera',
//       description:'Capturing images in ultra-low light down to 0.005 lux EXIR 2.0: advanced infrared technology 3D DNR technology, 30m IR distance Strong night performance',
//       img:'https://i.ibb.co/xfw9H05/service27.png',
//       price:2250,
//       rating:5
//     },
//     {
//       key:'16',
//       name:'Dahua HAC-HDW1200EMP 2MP HDCVI IR Eyeball Camera without Audio',
//       description:'Built-in mic IP67, DC12V Max 30fps@1080P Max. IR length 50m, Smart IR',
//       img:'https://i.ibb.co/59WtNxm/service28.png',
//       price:2300,
//       rating:4
//     }
//   ]


const Explores = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
  
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setProducts(data)
    })
  },[])
    return (
        <div>
             <Box sx={{ flexGrow: 1, my:4 }}>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
       Services
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            products?.map(product=><Explore
              
              key={product._id}
               product={product}
             ></Explore>)
        }
      </Grid>
      <Footer></Footer>
    </Box>
        </div>
    );
};

export default Explores;