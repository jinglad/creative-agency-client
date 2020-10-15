import React from 'react';

const RegService = (props) => {
    const { serviceIcon, service, description } = props.order;
    return (
        <div className="col-md-6 mb-4">
            <div className="service-list">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={serviceIcon} className="w-25" alt="" />
                    </div>
                    {/* <div className="col-sm-6">
                        <h5 className="p-2 rounded bg-success text-white mt-2">Done</h5>
                    </div> */}
                </div>
                <h5 className="font-weight-bold my-3">{service}</h5>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default RegService;