import React,{useRef, useState} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useParams, useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';

import { useEffect } from 'react';


const PurchaseDetails = () => {
    const [newPurchases,setNewPurchases]=useState({})
    const [addUser,setAddUser]=useState({})
    const {id}=useParams()
    
    const history =useHistory()
   
    let { path, url } = useRouteMatch();

    const [purchases, setPurchases] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => { 
              setPurchases(data.products)
            // console.log(data)
            })
    }, [])
    // console.log(id)
    
  useEffect(()=>{
    const match = purchases?.find(purchase => purchase?._id == id)
    setNewPurchases(match)
    console.log(purchases)
  },[purchases])


  const AddUser=e=>{
    const field=e.target.name;
    const value=e.target.value;
    const newAddUser={...addUser}
    newAddUser[field]=value;
    console.log(newAddUser)
    setAddUser(newAddUser);
  }

  const handleAddUser=e=>{
  
    const user={addUser}
    
    fetch('http://localhost:5000/addUser',{
      method:'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
  })
    .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setAddUser('')
    })
       e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <h1>This is a Purchase page</h1>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <img src={newPurchases?.img}alt="" />

        <Typography sx={{fontWeight:600, color:'green'}} variant="h6" component="div">
      {newPurchases?.name}
     </Typography>
     <Typography sx={{ mb:2}}  variant="h5" component="div">
      Tk.{newPurchases?.price}
     </Typography>
     <Typography sx={{mx:3}} variant="body2" color="text.secondary">
     <Rating name="read-only" value={newPurchases?.rating}  />
     </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography sx={{fontWeight:600}} variant="h4" gutterBottom>
      Add a Order
     </Typography>

        <form onSubmit={handleAddUser}>
     <TextField 
     sx={{width:'75%', m:1}}
     id="standard-name" 
     label="Your Name"
     type="name"
     name="name"
     onBlur={AddUser}
     variant="standard" />
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-email" 
     label="Your Email"
     name="email"
     type="email"
     onBlur={AddUser}
     variant="standard" />
     <br/>
   
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-title" 
     label="Order"
     name="title"
     type="title"
     onBlur={AddUser}
     variant="standard" />
     <br/>

    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-price" 
     label="Price"
     name="price"
     type="price"
     onBlur={AddUser}
     variant="standard" />
     <br/>
   
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-address" 
     label="Address"
     name="address"
     type="address"
     onBlur={AddUser}
     variant="standard" />
     <br/>
   
        
     {/* <Link style={{ textDecoration:'none'}} to={`${url}/myOrder`>
     <Button  sx={{width:'50%', mt:2}} type='submit' variant="contained">Order Now</Button>
     </Link> */}
       {/* <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/myOrder`}><Button color='inherit'>My Orders</Button></Link> */}
      <Button  type='submit' sx={{mt:2}} variant='contained'>Order Now</Button>
   
     </form>
        </Grid>
       
       
      </Grid>
    </Box>
           </Container>
        </div>
    );
};

export default PurchaseDetails;