import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import "../SignInScreen/SignInScreen.css";
// import logo from "../../images/logo/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUpScreen() {
  const navigate = useNavigate();


  // validation of email
  const [EE, setEME] = useState("");
  const handleEmailBlur = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (user.Email === "") { setEME(""); } else if (regex.test(user.Email)) { setEME(""); } else { setEME("email is invalid"); }
  };
  // validation of phone number
  const [PhE, setPhE] = useState("");
  const handlePhoneBlur = () => {
    const regex = /^\d{10}$/;
    if (user.Phone === "") { setPhE(""); } else if (regex.test(user.Phone)) { setPhE(""); } else { setPhE("Phone number should contain 10 digit only"); }
  };
  // validation of First Name & Last Name 
  const [FNE, setFNE] = useState("")
  const handleFNameBlur = () => {
    const regex = /^[A-Za-z]+$/;
    if (user.FName === "") { setFNE(""); } else if (regex.test(user.FName)) { setFNE(""); } else { setFNE("No charcter allow other than alphabets"); }
  };
  const [LNE, setLNE] = useState("")
  const handleLNameBlur = () => {
    const regex = /^[A-Za-z]+$/;
    if (user.LName === "") { setLNE(""); } else if (regex.test(user.LName)) { setLNE(""); } else { setLNE("No charcter allow other than alphabets"); }
  };
  // validation of password 
  const [PE, setPE] = useState("");
  const handlePasswordBlur = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (user.Password === "") { setPE(""); } else if (regex.test(user.Password)) { setPE(""); } else { setPE("Password must have one letter and one number and at least 8 character long"); }
  };


  const [user, setUser] = useState({
    FName: "",
    LName: "",
    Phone: "",
    Email: "",
    Password: "",
    RePassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const signUp = async () => {
    const { FName, LName, Email, Phone, Password, RePassword } = user;
    // console.log(user)
    if (!EE && !PhE && !FNE && !LNE && !PE) {

      if (FName && LName && Email && Password && RePassword) {
        if (Password === RePassword) {
          try {
            console.log({ FName, LName, Email, Phone, Password });
            const { data } = await axios.post(
              "http://localhost:3001/signup",
              { FName, LName, Email, Phone, Password },
              config
            );
            // console.log(data);
            localStorage.setItem("authToken", data.token);
            navigate("/");
            toast.success("Register Successfully");
          } catch (error) {
            console.log(error.response);
            toast.error(error.response.data);
          }

          // axios.post("http://localhost:3000/signup", user,config)
          // .then(res=>console.log(res))
          // .catch(err=>console.log(err));
        } else {
          toast.error("wrong password");
        }
      } else {
        toast.error("Fill complete form");
      }
    } else {
      toast.error("Fill Correct Details")
    }
  };

  // console.log(user);

  return (
    <div className="sign-wrapper">
    <div className="login-container" style={{ transform: "translate(-50%, 0%)" }}>
      <div className="center-con">
        {/* <h1>Alayna</h1> */}
        <img src="/logo/logo1-1.png" alt="logo" />
        {/* <img src={logo} alt="logo" /> */}
        <div className="back-container">
          <input
            type="text"
            value={user.FName}
            name="FName"
            onChange={handleChange}
            onBlur={handleFNameBlur}
            placeholder="First Name"
            required
          />
          {FNE && <>{FNE}</>}
          <input
            type="text"
            value={user.LName}
            name="LName"
            onChange={handleChange}
            onBlur={handleLNameBlur}
            placeholder="Last Name"
            required
          />
          {LNE && <>{LNE}</>}
          <input
            type="number"
            value={user.Phone}
            name="Phone"
            onChange={handleChange}
            onBlur={handlePhoneBlur}
            placeholder="Contact No"
            required
          />
          {PhE && <>{PhE}</>}
          <input
            type="email"
            value={user.Email}
            name="Email"
            onChange={handleChange}
            onBlur={handleEmailBlur}
            placeholder="E-mail"
            required
          />
          {EE && <>{EE}</>}
          <input
            type="password"
            value={user.Password}
            name="Password"
            onChange={handleChange}
            onBlur={handlePasswordBlur}
            placeholder="Password"
            required
          />
          {PE && <>{PE}</>}
          <input
            type="password"
            value={user.RePassword}
            name="RePassword"
            onChange={handleChange}
            placeholder="Re-enter Password"
            required
          />
          <div className="login-btn" onClick={signUp}>
            Sign up
          </div>
        </div>
        <div
          className="login-lst-msg"
          style={{ textAlign: "left", padding: "5px 15px" }}
        >
          Already have account? <a href="/signin">Sign in</a>
        </div>
      </div>
    </div>
    </div>
  );
}
