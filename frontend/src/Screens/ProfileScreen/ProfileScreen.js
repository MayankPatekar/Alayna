import React, { useEffect, useState } from "react";
// import axios from "axios";

// import React from "react";
// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ProfileScreen.css';
import { toast } from "react-toastify";

export default function ProfileScreen(){
    const navigate = useNavigate();
    const [profile,setProfile] = useState('');
    const [isUpdate,setIsUpdate] = useState(false);

    // state for input 
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    
    const fetchProfileData = async() =>{
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization: `Classic ${localStorage.getItem("authToken")}`
            }
        }
        try{
            const {data} = await axios.get("http://localhost:3001/profile",config)
            setProfile(data.user);
        }catch(error){
            localStorage.removeItem("authToken");
            alert("not authorized please sign in first")
        }
    }
    useEffect(()=>{
        if(!localStorage.getItem("authToken")){
            navigate("/signin")
        }

        fetchProfileData();
    },[navigate])
    
    const handleUpdate = async() =>{
        const config = {
            headers:{
                "Content-Type":"application/json",
                Authorization: `Classic ${localStorage.getItem("authToken")}`
            }
        }
        // e.preventDefault();
       await axios.post("/profile",{fname,lname,email,phone},config).then((res)=>{
            setProfile(res.data.user)
            setIsUpdate(false)
            toast(`${res.data.message}`)
            // fetchProfileData()
            // if(profile){isUpdate(false)}
            navigate("/profile")
            
        }).catch(err=>console.log(err))
        setLname('')
        setFname('')
        setEmail('')
        setPhone('')
    }
    // console.log(profile)
    // const logoutHandler = () =>{
        //     localStorage.removeItem("authToken");
        //     navigate("/");
        // }

    return(
        <div className="container" style={{margin: "30px auto"}}>
            
            <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>{profile? <>{profile.fname}{" "}{profile.lname}</>:<></>}</h4>
                      <h4>{profile? <>{profile.points ? <>{profile.points}</>:<>0</>}</>:<></>}</h4>
                      {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      {/* <button class="btn btn-primary">Follow</button> */}
                      <button className="btn btn-dark btn-lg btn-block profile-btn" onClick={()=>{navigate("/sharepoints")}}>Share Points</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {isUpdate ? <input type="text" value={fname} onChange={(event)=>setFname(event.target.value)} />:(profile? <>{profile.fname}{" "}</>:<></>)}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {isUpdate ? <input type="text" value={lname} onChange={(event)=>setLname(event.target.value)} />:(profile? <>{profile.lname}</>:<></>)}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {isUpdate ?<input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} />:(profile ? <>{profile.email}</>:<></>) }
                    
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {isUpdate ?<input type="text" value={phone} onChange={(event)=>setPhone(event.target.value)} />:(profile ? <>{profile.phone}</>:<></>) }
                      
                    </div>
                  </div>
                  <hr/>
                  {/* <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div> */}
                  {/* <hr/> */}
                  <div className="row">
                    <div className="col-sm-12">
                        {isUpdate ?(<><button className="btn btn-dark btn-lg btn-block profile-btn" onClick={handleUpdate} >Update</button>
                    <button className="btn btn-outline-dark btn-lg btn-block profile-btn" onClick={()=>{setIsUpdate(false)}}>Cancel</button></>)
                    :(<button className="btn btn-dark btn-lg btn-block profile-btn"onClick={()=>{setIsUpdate(true)}}>Edit Profile</button>)}
                    

                    


                      {/* <a class="btn btn-info " target="__blank" href="" >update</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}