import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/home" className="navbar-brand" href="#">
                <img src="https://lh3.googleusercontent.com/z-ekO_iHt8QWJowY9hlCnhBBTrMIETnY_wsxyylieTNgmsnk-Du5AK1MZKM_sDTDZi_OVrVqmaQJGPXeip8879J72IgCKQduGUWqCW1OFiZ2fcvkJNVCnXkCBuTq2J3QaDoREyXD-g=w2400" className="img-fluid w-50" alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4 active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">Our Team</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item mt-2">
                        <Link to="/login" className="login-btn" href="#">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;