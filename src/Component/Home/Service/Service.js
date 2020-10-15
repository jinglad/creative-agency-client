import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { serviceContext } from '../../../App';
import './Service.css';

const Service = (props) => {
    const { title, description } = props.service;
    const [serviceDetails, setServiceDetails] = useContext(serviceContext);

    const handleAddService = () => {
        setServiceDetails(props.service);
    }

    // console.log(serviceDetails);
    const icon = `data:image/jpeg;base64,${props.service.image.img}`;

    return (
        <div className="col-md-4 text-center mt-4" onClick={handleAddService}>
            <Link to="/order" className="text-decoration-none text-dark">
                <div className="service-container">
                    <div>
                        {/* <img src={icon} className="w-25" alt="" /> */}
                        <img className="w-25" src={icon} />
                        <h5 className="font-weight-bold my-3">{title}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;