import React from "react";
import "./HeaderMain.css";
import Frame from "../../../images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <div className="row my-5">
      <div className="mt-5 col-md-4 header-main-info">
        <h1 className="font-weight-bold">
          Let's Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta
          molestiae a, maiores dolorem esse.
        </p>
        <button className="btn-black">Hire Us</button>
      </div>
      <div className="header-main-img col-md-8">
        <img src={Frame} className="img-fluid w-75" alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
