import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import RegService from '../../Customer/RegService/RegService';
import SideBar from '../../Customer/SideBar/SideBar';

const FullOrderList = () => {
    const [orders, serOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // console.log(loggedInUser)

    useEffect(() => {
        fetch(`http://localhost:5000/fullOrderList`, {
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
                <div className="col-md-9 mt-5">
                    <h1 className="font-weight-bold">Service List</h1>
                    <div className="bg-light p-5 rounded">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => 
                                        <tr className="border">  
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.service}</td>
                                            <td style={{width:"100px"}}>{order.description}</td>
                                            <td className="btn btn-secondary">pending</td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullOrderList;