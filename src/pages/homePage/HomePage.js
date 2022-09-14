import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { homepageimage } from "../../assets";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-side">
          <div className="title">
            Welcome to <span className="main-title">Tunnel IQ</span>
          </div>
          <div>
            <p className="sub-title">
              Tunneling your <span className="main-title">Product and Tech</span> knowledge
            </p>
          </div>
          <div className="btn-container">
            <Link to="/categories">
              <button className="btn btn-primary btn-lg">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="left-side">
          <div className="image-container">
            <img
              className="image-style responsive-image"
              src={homepageimage}
              alt="quiz"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
