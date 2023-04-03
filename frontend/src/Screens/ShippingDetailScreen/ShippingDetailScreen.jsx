import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInfo } from "../../features/shippingInfoSclice";


import "./ShippingDetailScreen.css"

export default function ShippingDetailScreen(){
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(()=>{
    window.scrollTo(0, 0);
    if(!localStorage.getItem("authToken")){
      navigate("/signin")
    }
    if(cart.cartItems.length ===0){
      navigate("/")
    }
  })
    const dispatch = useDispatch()
    const [shippingInfo,setShippinfInfo] = useState({
        FirstName:"",
        LastName:"",
        Address:"",
        PinCode:"",
        City:"",
        State:"Maharashtra",
    })
    
    const handleChange = e =>{
        const {name , value } = e.target;
        setShippinfInfo({
            ...shippingInfo,
            [name]:value
        });
        
      }

      const handleClick = ()=>{
        dispatch(addInfo(shippingInfo))
        navigate("/confirmdetails")
      }
    return(<>
    <div className="ship-container">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div className="form">
    
  <div className="fields fields--2">
    <label className="field">
      <span className="field__label" for="firstname">First name</span>
      <input className="field__input" value={shippingInfo.FirstName} name="FirstName" onChange={handleChange} type="text" id="firstname"  />
    </label>
    <label className="field">
      <span className="field__label" for="lastname">Last name</span>
      <input className="field__input" value={shippingInfo.LastName} name="LastName" onChange={handleChange} type="text" id="lastname" />
    </label>
  </div>
  <label className="field">
    <span className="field__label" for="address">Address</span>
    <input className="field__input" value={shippingInfo.Address} name="Address" onChange={handleChange} type="text" id="address" />
  </label>
  {/* <label className="field">
    <span className="field__label" for="country">Country</span>
    <select className="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">United States</option>
    </select>
  </label> */}
  <div className="fields fields--3">
    <label className="field">
      <span className="field__label" for="zipcode">Zip code</span>
      <input className="field__input"value={shippingInfo.PinCode} name="PinCode" onChange={handleChange} type="text" id="zipcode" />
    </label>
    <label className="field">
      <span className="field__label" for="city">City</span>
      <input className="field__input" value={shippingInfo.City} name="City" onChange={handleChange} type="text" id="city" />
    </label>
    <label className="field">
      <span className="field__label" for="state">State</span>
      <select className="field__input" value={shippingInfo.State} name="State" onChange={handleChange}id="state">
        <option value="Maharashtra">Maharashtra</option>
        <option value="Goa">Goa</option>
      </select>
    </label>
  </div>
  </div>
  <hr/>
  <button className="button" onClick={handleClick}>Continue</button>
</div>
    </>)
}