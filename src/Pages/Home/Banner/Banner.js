import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
   
    imgPath:'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
   
    imgPath:'https://images.unsplash.com/photo-1589935447067-5531094415d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
  
    imgPath:
      'https://images.unsplash.com/photo-1568403394272-b67c62c50b6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
   
    imgPath:
      'https://images.unsplash.com/photo-1474301105119-cdc36a303335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
  },
];


const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
 
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
        <Box sx={{ maxWidth: 1200, maxHeight:1000, m:'auto', flexGrow: 1, pb:5, pt:2 }}>
        
          <Typography>{images[activeStep].label}</Typography>
      
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 600,
                    display: 'block',
                    Width: 900,
                    m:'auto',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
  
      
      </Box>
    );
    
    

};

export default Banner;