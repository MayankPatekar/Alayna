import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img1 from "./6.png";
import "./SharePointScreen.css";

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
     await axios.put(
        "http://localhost:3001/api/points/share",data,
        config
      );
      toast("Points share Successfully")
      navigate("/sharepoints")
      // console.log(message);
    } catch (error) {
      console.log(error)
    }
    // console.log(data);
  };

  return (
    <>
      <div className="shar-container">
        <img style={{ textAlign: "center" }} src={img1} alt="img" />
        <h2>Share Points</h2>
        <div className="">
          Points You have :
            {points? <>{points}</>:<></>}
        </div>
        <div className="row" style={{textAlign: "initial"}}>
          <div className="col">
            <h4>Enter E-Mail of recipent</h4>
            <input
              type="email"
              value={data.Email}
              onChange={handleChange}
              required
              name="Email"
              style={{width: "100%"}}
            />
          </div>
          <div className="col">
            <h4>Enter Amount :</h4>
            <input
              type="number"
              value={data.Amount}
              onChange={handleChange}
              name="Amount"
              style={{width: "100%"}}
            />
          </div>
        </div>

        <button
          style={{ width: "100%", margin: "20px 10px" }}
          className="btn btn-dark btn-lg btn-block"
          onClick={handlePay}
        >
          Pay Now
        </button>
      </div>
    </>
  );
}