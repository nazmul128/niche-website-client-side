import React,{ useState} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';


const PurchaseDetails = () => {
    const [newPurchases,setNewPurchases]=useState({})
    const [addUser,setAddUser]=useState({})
    const {id}=useParams()

    const {user}=useAuth();
    
    // const history =useHistory()
   
    // let { path, url } = useRouteMatch();

    const [purchases, setPurchases] = useState([])
    useEffect(() => {
        fetch('https://vast-everglades-34724.herokuapp.com/products')
            .then(res => res.json())
            .then(data => { 
              setPurchases(data.products)
            // console.log(data)
            })
    }, [])
    // console.log(id)
    
  useEffect(()=>{
    const match = purchases?.find(purchase => purchase?._id === id)
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
  
    
    fetch('https://vast-everglades-34724.herokuapp.com/addUser',{
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
           
            <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item xs={4}>
        <Typography sx={{fontWeight:600, mt:5}} variant="h4" gutterBottom>
      Add a Order
     </Typography>

        <form onSubmit={handleAddUser}>
     <TextField 
     sx={{width:'75%', m:1}}
     id="standard-name" 
     label="Your Name"
     type="name"
     name="name"
     defaultValue={user.displayName}
     onBlur={AddUser}
     variant="standard" />
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-email" 
     label="Your Email"
     name="email"
     defaultValue={user.email}
    
     type="email"
     onBlur={AddUser}
     variant="standard"
     readOnly />
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