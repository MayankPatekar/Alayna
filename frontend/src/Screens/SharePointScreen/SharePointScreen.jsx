import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img1 from "./6.png";
import "./SharePointScreen.css";
// import "../SignInScreen/SignInScreen.css"

export default function SharePointScreen() {
    const navigate = useNavigate()
  const [data, setData] = useState({
    Email: "",
    Amount: 0,
  });
  const [points,setPoints] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Classic ${localStorage.getItem("authToken")}`,
    },
  };

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
        navigate("/")
    }
    const getPoints = async()=>{

        const {data} = await axios.get("http://localhost:3001/profile",config);
        setPoints(data.user.points)
        // setPoints(data.p)
    }
    getPoints()
  })
  const handlePay = async () => {
    try {
      if(data.Amount >0){

        const mes = await axios.put(
          "http://localhost:3001/api/points/share",data,
          config
          );
          
          toast(`${mes.data.message}`)
          navigate("/sharepoints")
          console.log(mes);
        }else{
          toast("Enter amount")
        }
    } catch (error) {
      console.log(error)
      toast(`Email not found`)

    }
    // console.log(data);
  };

  return (
    <>
    <div className="share-wrapper">
      <div className="shar-container">
        <img style={{ textAlign: "center" }} src={img1} alt="img" />
        <h1 style={{fontSize:"40px"}}>Share Points</h1>
        <div className="" style={{fontSize:"22px"}}>
          Points You have:
            {points? <>{points}</>:<></>}
        </div>
        <div className="row" style={{textAlign: "initial"}}>
          <div className="col">
            {/* <h4>Enter E-Mail of recipent</h4> */}
            <input
              type="email"
              value={data.Email}
              onChange={handleChange}
              required
              name="Email"
              // style={{width: "100%"}}
              placeholder="Recipient's Email"
            />
          </div>
          <div className="col">
            {/* <h4>Enter Points:</h4> */}
            <input
              placeholder="Points to be shared"
              type="number"
              value={data.Amount}
              onChange={handleChange}
              name="Amount"
              // style={{width: "100%"}}
            />
          </div>
        </div>

        <button
          style={{margin: "10px 0px" }}
          className="btn btn-dark btn-lg btn-block share-btn"
          onClick={handlePay}>
          Share
        </button>
      </div>
      </div>
    </>
  );
}
