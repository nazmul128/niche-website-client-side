import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../Images/3828541.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{width:'500px', height:'600px'}} src={notfound} alt="" /><br/>
           <Link style={{textDecoration:'none'}} to='/'><Button variant='contained'>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;