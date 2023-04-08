import React from "react";
import './ContactUs.css';
// import contactbackground from './ContactBackGround.jpeg';

export default function Contact() {
    return (
        <div class="discount-contact">
            <div class="discount-info" >
                <span class="saint-text">Write To Us</span>
                <span class="main-text">Leave A Message</span>
                <p className="contact-para">Write to us if you have any questions, we will definitely contact you and find a solution.</p>
                <form>
                    <div class="Contact-box-field">
                        <input type="text" class="Contact-control" placeholder="Enter your Name" />
                    </div>
                    <div class="Contact-box-field">
                        <input type="email" class="Contact-control" placeholder="Enter your Email" />
                    </div>
                    <div class="Contact-box-field">
                        <textarea class="Contact-control" placeholder="Enter your Message">
                        </textarea>
                    </div>
                    <button type="submit" className="Contact-btn">send</button>
                </form>
            </div>
            {/* </div> */}
        </div>
        // </div>
    )
}