import React from 'react';
import CompanyWorkedWith from '../CompanyWorkedWith/CompanyWorkedWith';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyWorkedWith></CompanyWorkedWith>
            <Services></Services>
            <Works></Works>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;