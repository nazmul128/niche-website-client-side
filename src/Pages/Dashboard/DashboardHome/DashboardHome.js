import React from 'react';

import Grid from '@mui/material/Grid';
import Pay from './../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <Pay></Pay>
        </Grid>
        <Grid item xs={12} md={7}>
            <MyOrders></MyOrders>
        </Grid>
      </Grid>
    );
};

export default DashboardHome;