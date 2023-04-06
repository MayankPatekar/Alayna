 import React, { useState } from "react";
import "./subscribe.css";
import SITWU from "../Subscribe/SITWU3.png";
import axios from "axios";
import { toast } from "react-toastify";

const Subscribe = () => {

    const [email, setEmail] = useState();
    // validation of email
  const [EE, setEME] = useState("");
  const handleEmailBlur = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (email === "") { setEME(""); } else if (regex.test(email)) { setEME(""); } else { setEME("email is invalid"); }
  };
    const handleChange = e =>{
        setEmail(e.target.value);
      }
      const config ={
        header :{
          "Content-Type":"application/json"
        }
      }
      const handleSubmit = async() =>{
        if(!EE){

            const {data} = await axios.post(`http://localhost:3001/email/${email}`,config);
            if(data.code? data.code === 200:0){
    
                toast.success(`${data.message}`)
            }else{
                toast.info(`${data.message}`)
            }
        }else{
            toast.info("Please enter valid Email")
        }
// console.log(data)
      }

    return (
        <div className="wrapper">
        <div className="subscribe-form">
            <div className="subscribe-form_img">
                <img src={SITWU} className="js-img" alt=""/>
            </div>
            <div className="form-overall">
                <div className="txt-place">
            <h3 className="stay-font">Stay in touch with us</h3>
                <p className="to-be">To Be your own kind of beautiful</p>
            </div>
                <div className="form-inside">
                <div className="box-field_row">
                    <div className="box-field">
                        <input type="email" onBlur={handleEmailBlur} value={email} onChange={handleChange} className="form-input" placeholder="Enter your email"/>
                        {EE && <>{EE}</>}
                    </div>
                    <button type="submit" className="sub-btn" onClick={handleSubmit}>Subscribe</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
  };
  
  export default Subscribe;