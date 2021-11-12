import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
      img: 'https://i.ibb.co/59WtNxm/service28.png',
     
    },
    {
      img: 'https://i.ibb.co/xfw9H05/service27.png',
     
    },
    {
      img: 'https://i.ibb.co/7QX78rm/service24.png',
      
    },
    {
      img: 'https://i.ibb.co/m9SJq3n/service22.png',
     
    },
    {
      img: 'https://i.ibb.co/68DZ8d4/service21.png',
     
    },
    {
      img: 'https://i.ibb.co/68DZ8d4/service21.png',
      
    },
    {
      img: 'https://i.ibb.co/tZNSRTp/service13.png',
      
    },
    {
      img: 'https://i.ibb.co/4JTvx9k/service9.png',
     
    },
    {
      img: 'https://i.ibb.co/m9SJq3n/service22.png',
      
    },
    {
      img: 'https://i.ibb.co/fHf8PSv/service10.png',
      
    },
    {
      img: 'https://i.ibb.co/tZNSRTp/service13.png',
    
    },
    {
      img: 'https://i.ibb.co/9GGLBhg/service15.png',
     
    },
  ];

const DashboardHome = () => {
    return (
        <ImageList sx={{ width: '100%', m:2, p:2, height: 800 }} cols={3} >
        {itemData.map((item) => (
          <ImageListItem sx={{ border: 0, m:2, borderRadius:5, display:'flex', flexWrap: 'wrap',  boxShadow: 3 }} key={item.img}>
            <img 
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
     
    );
};

export default DashboardHome;