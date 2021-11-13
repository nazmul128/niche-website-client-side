// import * as React {useState,useEffect} from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//   </Box>
// );

// const card = (
//   <Box sx={{ flexGrow: 1, my:4 }}>
//           <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
//        Services
//       </Typography>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {
//             products?.map(product=><Explore
              
//               key={product._id}
//                product={product}
//              ></Explore>)
//         }
//       </Grid>
//       <Footer></Footer>
//     </Box>
    
 
// );

// export default function OutlinedCard() {
//   const [manageProducts,setManageProducts]=useState([])
//   useEffect(()=>{
  
//     fetch('http://localhost:5000/products')
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data)
//       setManageProducts(data)
//     })
//   },[])
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

import React,{useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ManageProduct from '../ManageProduct/ManageProduct'
import { useEffect } from 'react';


const ManageProducts = () => {
  const [manageProducts,setManageProducts]=useState([])
  useEffect(()=>{
  
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setManageProducts(data)
    })
  },[])
    return (
        <div>
             <Box sx={{ flexGrow: 1, my:4 }}>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
       Manage All Products
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            manageProducts.map(manageproduct=><ManageProduct
              
              key={manageproduct._id}
              manageproduct={manageproduct}
             ></ManageProduct>)
        }
      </Grid>
      
    </Box>
        </div>
    );
};

export default ManageProducts;