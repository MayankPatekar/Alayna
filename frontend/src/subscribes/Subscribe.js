import React from "react";
import "./subscribe.css";
import SITWU from '../subscribes/SITWU.jpg'

const Subscribe = () => {
    return (
        <div className="wrapper">
        <div className="subscribe-form">
            <div className="subscribe-form_img">
                <img src={SITWU} className="js-img" alt=""/>
            </div>
            <div className="form-controls">
            <form>
                <h3 className="stay-font">Stay in touch with us</h3>
                <p className="to-be">To Be your own kind of beautiful</p>
                <div className="box-field_row">
                    <div className="box-field">
                        <input type="email" className="form-input" placeholder="Enter your email"/>
                    </div>
                    <button type="submit" className="sub-btn">Subscribe</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
  };
  
  export default Subscribe;