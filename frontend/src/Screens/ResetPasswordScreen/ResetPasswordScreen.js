import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./ResetPasswordScreen.css";

export default function ResetPasswordScreen(){
    const navigate = useNavigate();
    const params = useParams();
    // validation of password 
const [PE, setPE] = useState("");
const handlePasswordBlur = () => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  if (user.Password === "") {setPE("");} else if (regex.test(user.Password)) {setPE("");} else {setPE("Password must have one letter and one number and at least 8 character long");}
};
 // validation of re enter password 
 const [RPE, setRPE] = useState("");
 const handleRePasswordBlur = () => {
   if (user.RePassword === "") {setRPE("");} else if (user.RePassword===user.Password) {setRPE("");} else {setRPE("Password Schould match");}
 };
    const [user, setUser] = useState({
        Password:"",
        RePassword:""
    });

    useEffect(()=>{
    if(localStorage.getItem("authToken")){
      navigate("/");
    }
    },[navigate]);

    const handleChange = e =>{
        const {name , value } = e.target;
        setUser({
            ...user,
            [name]:value
        });
        
    }

    const config ={
        header :{
          "Content-Type":"application/json"
        }
    }

    const resetPass = async () =>{
        const {Password , RePassword} = user;
        if(Password === RePassword){
            try{
                const {data} = await axios.put(`http://localhost:3001/resetpassword/${params.resetToken}`,{Password},config)
                console.log(data);
                alert("Password Reset Successfully.")
                navigate("/signin");
            }catch(err){
                alert(err);
            }
        }else{
            alert("Password dont match ...")
        }
    }
    return(
        <div className="forget-container">
            <div className="center-con">
            <img src="/logo/logo1.png" alt="logo" />

                <div className="back-container">
                    <h2>
                        Enter New password :
                    </h2>
                    <input type="password" value={user.Password} onBlur={handlePasswordBlur} name="Password" onChange={handleChange} placeholder="Password" required/>
                    {PE && <>{PE}</>}
                    <input type="password" value={user.RePassword}onBlur={handleRePasswordBlur} name="RePassword" onChange={handleChange} placeholder="Re-enter Password" required/>
                    {RPE && <>{RPE}</>}
                    <div className="login-btn" onClick={resetPass}>Reset Password</div>
                </div>

            </div>
        </div>
    )
    
}