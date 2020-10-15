import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {


    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/feedbacks", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data);
            })
    }, []);


    return (
        <div className="my-5 container">
            <div>
                <h3 className="my-5 text-center font-weight-bold">Clients <span style={{color:"#7AB259"}}>Feedback</span></h3>
                <div className="row">
                    {
                        feedbacks.map(feedback => <Review feedback={feedback}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;