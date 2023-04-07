import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './SignInScreen.css';
import { toast } from "react-toastify";
// import logo from "../../images/logo/Logo.png";


export default function SignInScreen() {

  const navigate = useNavigate({});
  // validation of email
  const [EE, setEME] = useState("");
  const handleEmailBlur = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (user.Email === "") { setEME(""); } else if (regex.test(user.Email)) { setEME(""); } else { setEME("Email is invalid"); }
  };
  // validation of password 
  const [PE, setPE] = useState("");
  const handlePasswordBlur = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (user.Password === "") { setPE(""); } else if (regex.test(user.Password)) { setPE(""); } else { setPE("Password must have one letter and one number and at least 8 character long"); }
  };

  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  }
  const signIn = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/signin", user, config);
      localStorage.setItem("authToken", data.token);
      navigate("/")
      toast.success(`Welcome , Happy shopping`, { autoClose: 2000 })
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className="sign-wrapper">
      <div className="login-container">
        <div className="center-con">
          {/* <h1>Alayna</h1> */}
          <img src="/logo/logo1-1.png" alt="logo" />

          {/* <img src={logo} alt="logo" /> */}
          <div className="back-container">

            <input type="text" name="Email" value={user.Email} onBlur={handleEmailBlur} onChange={handleChange} placeholder="Enter Email" />
            {EE && <>{EE}</>}
            <input type="password" name="Password" value={user.Password} onBlur={handlePasswordBlur} onChange={handleChange} placeholder="Password" />
            {PE && <>{PE}</>}
            <div style={{ textAlign: "left", padding: "5px 15px" }}><a href="/forgotpassword" style={{ color: "rgb(217,131,35)" }}>Forget password? </a></div>
            <div className="login-btn" onClick={signIn}>Sign in</div>
          </div>
          <div className="login-lst-msg" >New User?    <a href="/signup">Sign up</a></div>
        </div>
      </div>
    </div>
  )
}