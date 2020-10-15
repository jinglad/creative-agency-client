import React from 'react';
import './Review.css';

const Review = (props) => {
    const { photo } = props.feedback;
    const { name, position, description } = props.feedback.data;

    return (
        <div className="col-md-4 mb-3">
            <div className="review-container">
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <img src={photo} className="img-fluid rounded-circle" alt="" />
                    </div>
                    <div className="col-sm-9">
                        <h4 className="font-weight-bold">{name}</h4>
                        <h6>{position}</h6>
                    </div>
                </div>
                <div>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;