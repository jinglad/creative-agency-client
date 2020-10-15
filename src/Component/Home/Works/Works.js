import React from 'react';
import Carousel from 'react-elastic-carousel';
import img_1 from "../../../images/carousel-1.png";
import img_2 from "../../../images/carousel-2.png";
import img_4 from "../../../images/carousel-4.png";
import img_5 from "../../../images/carousel-5.png";
import './Works.css';

const photoes = [
    {
        img: img_1
    },
    {
        img: img_2
    },
    {
        img: img_4
    },
    {
        img: img_5
    },
    {
        img: img_1
    },
    {
        img: img_2
    },
    {
        img: img_4
    },
    {
        img: img_5
    },
]

const Works = () => {
    const breakPoints = [
        { width: 300, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
    ]
    return (
        <div className="work-container">
            <h3 className="text-center mb-5 text-white font-weight-bold">Here are some of <span style={{color:"#7AB259"}}>our works</span></h3>
            <div className="container">
                <Carousel breakPoints={breakPoints}>
                    {
                        photoes.map(photo => {
                            return (
                                <div>
                                    <img src={photo.img} className="w-75" style={{ height: "100%" }} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Works;