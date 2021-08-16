import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SideBar from "../../Customer/SideBar/SideBar";
import LogoImage from "../../../images/logos/logo.png";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  let history = useHistory();

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // console.log(file);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("description", info.description);

    fetch("https://fast-citadel-29159.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Your Service is Added...!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    history.push("/");
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <div className="mb-5">
            <Link to="/home">
              <img className="img-fluid w-50" src={LogoImage} alt="" />
            </Link>
          </div>
          <SideBar></SideBar>
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold">Add Service</h1>
          <div className="bg-light p-5 rounded">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="form-group" style={{ width: "500px" }}>
                  <label className="font-weight-bold">Service Title</label>
                  <input
                    onBlur={handleBlur}
                    className="form-control form-control-lg"
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="form-group ml-3">
                  <label className="font-weight-bold">Icon</label>
                  <br />
                  <input
                    onChange={handleFileChange}
                    className="form-conrol-lg"
                    type="file"
                    name="icon"
                  />
                </div>
              </div>
              <div style={{ width: "500px" }} className="form-group">
                <label className="font-weight-bold">Description</label>
                <textarea
                  onBlur={handleBlur}
                  className="form-control form-control-lg"
                  name="description"
                  placeholder="Enter Description"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
