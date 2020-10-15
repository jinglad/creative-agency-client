import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Component/Login/Login';
import Home from './Component/Home/Home/Home';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Order from './Component/Customer/Order/Order';
import ServiceList from './Component/Customer/ServiceList/ServiceList';
import FeedBack from './Component/Customer/FeedBack/FeedBack';
import AddAdmin from './Component/Admin/AddAdmin/AddAdmin';
import FullOrderList from './Component/Admin/FullOrderList/FullOrderList';
import AddService from './Component/Admin/AddService/AddService';

export const UserContext = createContext();
export const serviceContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  return (
    <serviceContext.Provider value={[serviceDetails, setServiceDetails]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/customer">
                <Order></Order>
              </PrivateRoute>
              <PrivateRoute path="/service-list">
                <ServiceList></ServiceList>
              </PrivateRoute>
              <PrivateRoute path="/review">
                <FeedBack></FeedBack>
              </PrivateRoute>
              <PrivateRoute path="/order">
                <Order></Order>
              </PrivateRoute>
              <PrivateRoute path="/add-admin">
                <AddAdmin></AddAdmin>
              </PrivateRoute>
              <PrivateRoute path="/full-order-list">
                <FullOrderList></FullOrderList>
              </PrivateRoute>
              <PrivateRoute path="/add-service">
                <AddService></AddService>
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </serviceContext.Provider>
  );
}

export default App;
