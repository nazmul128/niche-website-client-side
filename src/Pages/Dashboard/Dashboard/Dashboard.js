import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import AgricultureIcon from '@mui/icons-material/Agriculture';import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  import { Button, ListItemButton } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from './../AddProduct/AddProduct';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrder from './../ManageAllOrder/ManageAllOrder';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import ManageProducts from './../ManageProducts/ManageProducts';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReorderIcon from '@mui/icons-material/Reorder';
import useAuth from '../../../hooks/useAuth';
import AddReviews from '../AddReviews/AddReviews';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
const {admin, logout}=useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
      
         {/* {
           !admin && <Box> */}
              <ListItem disablePadding>
            <ListItemButton>
              <DashboardIcon>
              
              </DashboardIcon>
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}`}><Button color='inherit'>Dashboard</Button></Link>
            </ListItemButton>
          </ListItem>
          {/* {
           !admin && <Box> */}
          {
            !admin &&
            <ListItem disablePadding>
            <ListItemButton>
              <PaymentIcon>
                <InboxIcon />
              </PaymentIcon>
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/pay`}><Button color='inherit'>Pay</Button></Link>
            </ListItemButton>
          </ListItem>
          }
         {
           !admin &&
           <ListItem disablePadding>
           <ListItemButton>
             <AgricultureIcon>
               <InboxIcon />
             </AgricultureIcon>
             <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/myOrder`}><Button color='inherit'>My Orders</Button></Link>
           </ListItemButton>
         </ListItem>
         }
        {
          !admin &&
          <ListItem disablePadding>
          <ListItemButton>
            <ReviewsIcon>
              <InboxIcon />
            </ReviewsIcon>
            <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/reviews`}><Button color='inherit'>Reviews</Button></Link>
          </ListItemButton>
        </ListItem>
        }
           {/* </Box>
         } */}
        {/* {
          admin && <Box> */}
              {
                admin &&
                <ListItem disablePadding>
            <ListItemButton>
              <ReorderIcon>
                <InboxIcon />
              </ReorderIcon>
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/allOrder`}><Button color='inherit'>Manage Orders</Button></Link>
            </ListItemButton>
          </ListItem>
              }
          {
            admin &&
            <ListItem disablePadding>
            <ListItemButton>
              <AddPhotoAlternateIcon>
                <InboxIcon />
              </AddPhotoAlternateIcon>
              <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/addProduct`}><Button color='inherit'>Add Products</Button></Link>
            </ListItemButton>
          </ListItem>
          }
          {
            admin &&
            <ListItem disablePadding>
            <ListItemButton>
              <SupervisorAccountIcon>
                <InboxIcon />
              </SupervisorAccountIcon>
              <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/makeAdmin`}><Button color='inherit'>Make Admin</Button></Link>
            </ListItemButton>
          </ListItem>
          }
         {
           admin && 
           <ListItem disablePadding>
           <ListItemButton>
             <ProductionQuantityLimitsIcon>
               <InboxIcon />
             </ProductionQuantityLimitsIcon>
             <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/manageProduct`}><Button color='inherit'>Manage Products</Button></Link>
           </ListItemButton>
         </ListItem>

         }
         <ListItem disablePadding>
            <ListItemButton>
         
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} onClick={logout}  to={`${url}`}><Button color='inherit'>Logout</Button></Link>
            </ListItemButton>
          </ListItem>
          {/* </Box>
        }
          */}
        
          
        
        </List>
      </nav>
     
      <nav aria-label="secondary mailbox folders">
       
      </nav>
    </Box>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
           
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          CCTV Security Camera
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/pay`}>
         <Pay></Pay>
        </Route>
        <Route path={`${path}/myOrder`}>
         <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/reviews`}>
        <AddReviews></AddReviews>
        </Route>
        {/* <Route path={`${path}/myOrder`}>
         <ManageAllOrder></ManageAllOrder>
        </Route> */}
        <AdminRoute path={`${path}/allOrder`}>
         <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
         <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
         <ManageProducts></ManageProducts>
        </AdminRoute>
        {/* <AdminRoute path={`${path}/makeAdmin`}>
        <Reviews></Reviews>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
        <AddDoctor></AddDoctor>
        </AdminRoute> */}
       
      
      </Switch>
        
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
