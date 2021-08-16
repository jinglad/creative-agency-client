import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import airbnb from "../../../images/logos/airbnb.png";
import netflix from "../../../images/logos/netflix.png";
import uber from "../../../images/logos/uber.png";

const fakeCompany = [
  {
    img: slack,
  },
  {
    img: google,
  },
  {
    img: uber,
  },
  {
    img: netflix,
  },
  {
    img: airbnb,
  },
];

const CompanyWorkedWith = () => {
  return (
    <div className="container my-5 text-center ">
      <div className="row ml-3">
        {fakeCompany.map((company) => (
          <div className="col-md-2 mr-2">
            <img
              className="img-fluid w-75"
              style={{ height: "80px" }}
              src={company.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyWorkedWith;
