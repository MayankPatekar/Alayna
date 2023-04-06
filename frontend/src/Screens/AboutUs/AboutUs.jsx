import React from "react";
import viks from "./vikankshi.jpeg"
import maya from "./Mayank.jpeg"
import "./AboutUs.css"


export default function AboutUs() {
  return (
    <div className="wrapper-about">
      <div className="about-section">
        <h1 className="about-txt">About Us</h1>
        <p className="welcome-txt">Welcome to Alayna</p>
        <p className="info-about">We offer each customer the most basic household goods, and also to create a unique space of beauty and care.</p>
      </div>

      <h2 style={{ textAlign: "center" ,fontFamily:"Amatic SC",fontSize:"60px",fontWeight:"700"}}>Our Team</h2>
      {/* <div className="wrap-card"> */}
        <div className="about-row">
          <div className="about-column">
            <div className="about-card">
              <img src={viks} alt="Vikankshi" style={{ width: "100%" }} />
              <div className="container-about">
                <h2 className="name-about-direct">Vikankshi Patil</h2>
                <p className="title">Project Director</p>
                <p className="title">Creative and Quick learner.</p>
                <p className="title">viks@example.com</p>
                <p><button className="about-btn">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="about-column">
            <div className="about-card">
              <img src={maya} alt="Mayank" style={{ width: "100%", }} />
              <div className="container-about">
                <h2 className="name-about-direct">Mayank Patekar</h2>
                <p className="title" style={{alignContent:"center"}}>Project Director</p>
                <p className="title">Skilled and Dedicated Person.</p>
                <p className="title">maya@example.com</p>
                <p><button className="about-btn">Contact</button></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    // </div>
  )
}