import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const FeedBack = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    const feedbackDetails = {
      ...loggedInUser,
      data: data,
      registrationTime: new Date(),
    };
    fetch("https://fast-citadel-29159.herokuapp.com/addFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Thank you for your feedback...!");
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
          <h1 className="font-weight-bold">Review</h1>
          <div className="bg-light p-5 rounded mb-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "600px", marginTop: "80px" }}
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={loggedInUser.email}
                  ref={register({ required: true })}
                  placeholder="Your email address"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={loggedInUser.name}
                  ref={register({ required: true })}
                  placeholder="Your name / comapny's name"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="position"
                  ref={register({ required: true })}
                  placeholder="Your Position"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  ref={register({ required: true })}
                  cols="15"
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <input type="submit" className="btn-black" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
