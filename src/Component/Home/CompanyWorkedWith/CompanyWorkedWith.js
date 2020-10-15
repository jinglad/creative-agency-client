import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const CompanyWorkedWith = () => {
    return (
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-md-2 mr-2">
                    <img className="img-fluid w-75" src={slack} alt="" />
                </div>
                <div className="col-md-2 mr-2">
                    <img className="img-fluid w-75" src={google} alt="" />
                </div>
                <div className="col-md-2 mr-2">
                    <img className="img-fluid w-50" src={uber} alt="" />
                </div>
                <div className="col-md-2 mr-2">
                    <img className="img-fluid w-50" src={netflix} alt="" />
                </div>
                <div className="col-md-2">
                    <img className="img-fluid w-75" src={airbnb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CompanyWorkedWith;