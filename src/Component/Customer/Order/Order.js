import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import logo from "../../../images/logos/logo.png";
import { serviceContext, UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useContext(serviceContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    let history = useHistory();


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const icon = `data:image/jpeg;base64,${serviceDetails.image.img}`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        formData.append('service', serviceDetails.title);
        formData.append('description', info.description);
        formData.append('price', info.price);
        formData.append('serviceIcon', icon);

        fetch('http://localhost:5000/postOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Your order is submitted...!..check your service list...Thank you...!');
                }
            })
            .catch(error => {
                console.error(error)
            })
        history.push('/');
    }

    // console.log(icon);

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
                    <h1 className="font-weight-bold">Order</h1>
                    <div className="bg-light p-5 rounded">
                        <form onSubmit={handleSubmit} style={{ width: "600px", marginTop: "100px" }}>
                            <div className="form-group">
                                <input onBlur={handleBlur} className="form-control font-weight-bold form-control-lg" type="text" value={loggedInUser.name} name="name" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} className="form-control font-weight-bold form-control-lg" type="email" value={loggedInUser.email} name="email" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} className="form-control font-weight-bold form-control-lg" type="text" name="service" value={serviceDetails.title} placeholder="Graphic Design" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" cols="15" rows="5" className="form-control font-weight-bold form-control-lg" name="description" placeholder="Project Details"></textarea>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <input onBlur={handleBlur} className="form-control font-weight-bold form-control-lg" type="text" name="price" placeholder="Price" />
                                </div>
                                <div className="ml-2 col-sm-4">
                                    <input onChange={handleFileChange} className="form-control-lg" type="file" name="" id="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn-black" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;