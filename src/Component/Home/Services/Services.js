import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fast-citadel-29159.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container services-container">
            <h3 className="text-center font-weight-bold">Provide awesome <span style={{ color: "#7AB259" }}>sevices</span></h3>
            <div className="row">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;