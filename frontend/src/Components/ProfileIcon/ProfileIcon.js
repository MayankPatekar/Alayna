import React, { useState } from "react";
import "./ProfileIcon.css"
import userimg from "../ProfileIcon/profile.png"
// import profile from "../ProfileIcon/profile.png"
// import help from "../ProfileIcon/help.png"
// import setting from "../ProfileIcon/setting.png"
// import logout from "../ProfileIcon/logout.png"
// import {useNavigate} from  'react-router-dom';
// import {FiUser}  from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function ProfileBox({setIsUser}){
    const navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem("authToken")
    setIsUser(false);
    toast.info(`You're Sign out ,Come back soon!`,{

    })
    navigate("/");
    
  }
    const [isActive, setActive] = useState(false);
    const ToggleActive =() =>{
        setActive(!isActive)
    }
    // const history = useNavigate({});
    return(
        <div className="action">
            <div className="pro" onMouseEnter={ToggleActive} >
                <img src={userimg} alt=""/>     
            </div>
            {/* {console.log(isActive)} */}
            {isActive?
            <div className="menu">
                <ul>
                {/* <FiUser size='2.5rem' /> */}
                    <li><a href="/profile" >My Profile</a></li>
                    <li><a href="/sharepoints">Share Points</a></li>
                    <li><a href="/orders">orders</a></li>
                    <li><button className="btn btn-light"onClick={logout}>Logout</button></li>
                </ul>
            </div>
        :
        <></>
        }     
        </div>
    )
}



    //     <div className="login-button">
    //     <button onClick={()=>{
    //         // alert("logged out...")
    //         setLoginUser()
    //         history('/');
    //     }}>Logout</button>
    // </div>