import React, {useState,useEffect} from 'react';

const Reviews = () => {
    const[reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setReviews(data)
        })
    },[])

    return (
        <div>
            {
                reviews.map(review=><h1>This is a Review Page {review?.reviews?.name}</h1>)
            }
            
        </div>
    );
};

export default Reviews;