import React from "react";

const ContactUs = () => {
  return (
    <div style={{ background: "#FBD062", marginTop: "120px" }} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 contact-us-info">
            <h2 className="font-weight-bold">
              Let us handle your <br /> project, professionally.
            </h2>
            <p>
              <small>
                With well written codes, we build amazing apps for all <br />{" "}
                platforms, mobile and web apps in general.
              </small>
            </p>
          </div>
          <div className="col-md-7 ml-5">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your name / comapny's name"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <input type="submit" className="btn-black" value="Send" />
              </div>
            </form>
          </div>
        </div>
        <p className="mt-5 ml-275 copyright">copyright Orange labs 2020</p>
      </div>
    </div>
  );
};

export default ContactUs;
