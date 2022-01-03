import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../../Customer/SideBar/SideBar';

const FullOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch(`https://fast-citadel-29159.herokuapp.com/fullOrderList`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <div className="mb-5">
                        <Link to="/home">
                            <img className="img-fluid w-50" src="https://lh3.googleusercontent.com/z-ekO_iHt8QWJowY9hlCnhBBTrMIETnY_wsxyylieTNgmsnk-Du5AK1MZKM_sDTDZi_OVrVqmaQJGPXeip8879J72IgCKQduGUWqCW1OFiZ2fcvkJNVCnXkCBuTq2J3QaDoREyXD-g=w2400" alt="" />
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
                                            <td style={{ width: "100px" }}>{order.description}</td>
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
