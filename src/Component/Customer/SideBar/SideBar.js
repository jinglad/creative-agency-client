import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartPlus, faCommentDots, faList, faPlus, faUserClock } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { UserContext } from '../../../App';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://fast-citadel-29159.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link className="text-decoration-none text-dark item" to="/order"><FontAwesomeIcon icon={faCartPlus} /> Order</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-dark item" to="/service-list"><FontAwesomeIcon icon={faList} /> Service-list</Link>
                </li>
                {isAdmin &&
                    <div>
                        <li>
                            <Link className="text-decoration-none text-dark item" to="/full-order-list"><FontAwesomeIcon icon={faList} /> Full-Order-list</Link>
                        </li>
                        <li>
                            <Link className="text-decoration-none text-dark item" to="/add-service"><FontAwesomeIcon icon={faPlus} /> Add-Service</Link>
                        </li>
                    </div>}
                <li>
                    <Link className="text-decoration-none text-dark item" to="/review"><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                </li>
                {isAdmin && <li>
                    <Link className="text-decoration-none text-dark item" to="/add-admin"><FontAwesomeIcon icon={faUserClock} /> Make Admin</Link>
                </li>}
            </ul>
        </div>
    );
};

export default SideBar;