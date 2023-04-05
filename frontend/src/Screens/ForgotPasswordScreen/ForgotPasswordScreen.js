import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPasswordScreen.css';
import '../SignInScreen/SignInScreen.css';

export default function ForgotPasswordScreen() {

    const navigate = useNavigate();
    // validation of email
    const [EE, setEME] = useState("");
    const handleEmailBlur = () => {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
        if (user.Email === "") { setEME(""); } else if (regex.test(user.Email)) { setEME(""); } else { setEME("email is invalid"); }
    };
    const [user, setUser] = useState({
        Email: "",
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
        });

    }

    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }

    const forgotpass = async () => {
        const { Email } = user;
        console.log(Email);

        if (Email) {
            try {
                const { data } = await axios.post("http://localhost:3001/forgotpassword", { Email }, config)
                alert("link send");
                console.log(data);

            } catch (error) {
                console.log(error);
            }

        } else {
            alert("Enter Email Address")
        }

    }




    return (
        <div className="forgot-wrapper">
            <div className="login-container">
                <div className="center-con">
                    <img src="/logo/logo1.png" alt="logo" />

                    <div className="back-container">
                        <h4 style={{ fontSize: "20px",color:"rgb(244,181,43)" }}>
                            Enter Email Id to reset password :
                        </h4>
                        <input type="email" value={user.Email} name="Email" onBlur={handleEmailBlur} onChange={handleChange} placeholder="E-mail" required />
                        {EE && <>{EE}</>}
                        <div className="login-btn" onClick={forgotpass} style={{marginBottom:"10px"}}>Send Link</div>
                    </div>
                </div>
            </div>
        </div>
    )

}