import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import logo from "../../../images/logos/logo.png";
import './ServiceList.css';
import { useState } from 'react';
import { UserContext } from '../../../App';
import RegService from '../RegService/RegService';

const ServiceList = () => {
    const [orders, serOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch(`http://localhost:5000/customerOrders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                serOrders(data);
            })
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="mb-5">
                        <Link to="/home">
                            <img className="img-fluid w-50" src={logo} alt="" />
                        </Link>
                    </div>
                    <SideBar></SideBar>
                </div>
                <div className="col-md-8 mt-5">
                    <h1 className="font-weight-bold">Service List</h1>
                    <div className="bg-light p-5 rounded">
                        <div className="row">
                            {
                                orders.map(order => <RegService order={order}></RegService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;