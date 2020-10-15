import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn } from './loginManager';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from "../../images/logos/logo.png";


initializeLoginFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: ''
    })

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    return (
        <div className="container">
            <div className="text-center mt-5">
                <Link to="/home" href="#">
                    <img src={logo} className="img-fluid w-25" alt="" />
                </Link>
            </div>
            <div className="text-center login-box">
                <div className="mt-5">
                    <h3>Login With</h3>
                    <button onClick={googleSignIn} className="google-sign-in-btn"> <FontAwesomeIcon className="google-icon" icon={faGoogle} /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;