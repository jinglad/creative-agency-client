import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Customer/SideBar/SideBar";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (email) => {
    fetch("https://fast-citadel-29159.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Admin Added...!");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <div className="mb-5">
            <Link to="/home">
              <img
                className="img-fluid w-50"
                src="https://lh3.googleusercontent.com/z-ekO_iHt8QWJowY9hlCnhBBTrMIETnY_wsxyylieTNgmsnk-Du5AK1MZKM_sDTDZi_OVrVqmaQJGPXeip8879J72IgCKQduGUWqCW1OFiZ2fcvkJNVCnXkCBuTq2J3QaDoREyXD-g=w2400"
                alt=""
              />
            </Link>
          </div>
          <SideBar></SideBar>
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold">Make Admin</h1>
          <div className="bg-light p-5 rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="form-control form-control-lg"
                  ref={register({ required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="mt-36 ml-3">
                <input
                  type="submit"
                  className="btn btn-success form-control-lg"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
