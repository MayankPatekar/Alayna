import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInfo } from "../../features/shippingInfoSclice";


import "./ShippingDetailScreen.css"
import { toast } from "react-toastify";

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
        PhoneNumber:"",
        Address:"",
        PinCode:"",
        City:"",
        State:"Maharashtra",
    })
    // validating first name
    const [FNE, setFNE] = useState("")
  const handleFNameBlur = () => {
    const regex = /^[A-Za-z]+$/;
    if (shippingInfo.FirstName === "") { setFNE(""); } else if (regex.test(shippingInfo.FirstName)) { setFNE(""); } else { setFNE("No charcter allow other than alphabets"); }
  };
  // validating last name
  const [LNE, setLNE] = useState("")
  const handleLNameBlur = () => {
    const regex = /^[A-Za-z]+$/;
    if (shippingInfo.LastName === "") { setLNE(""); } else if (regex.test(shippingInfo.LastName)) { setLNE(""); } else { setLNE("No charcter allow other than alphabets"); }
  };

  // validating phone number 
  const [PhE, setPhE] = useState("");
  const handlePhoneBlur = () => {
    const regex = /^\d{10}$/;
    if (shippingInfo.PhoneNumber === "") { setPhE(""); } else if (regex.test(shippingInfo.PhoneNumber)) { setPhE(""); } else { setPhE("Phone number should contain 10 digit only"); }
  };

  // validating address not shoud be null

  // validating pincode
  const [PinE, setPinE] = useState("");
  const handlePinBlur = () => {
    const regex = /^\d{6}$/;
    if (shippingInfo.PinCode === "") { setPinE(""); } else if (regex.test(shippingInfo.PinCode)) { setPinE(""); } else { setPinE("Pin code should be 6 digit only"); }
  };
  // validating city
  const [CE, setCE] = useState("")
  const handleCityBlur = () => {
    const regex = /^[a-zA-Z(),\s]*$/;
    if (shippingInfo.City === "") { setCE(""); } else if (regex.test(shippingInfo.City)) { setCE(""); } else { setCE("No charcter allow other than alphabets"); }
  };

    const handleChange = e =>{
        const {name , value } = e.target;
        setShippinfInfo({
            ...shippingInfo,
            [name]:value
        });
        
      }

      const handleClick = ()=>{
        if(!FNE && !LNE && !PhE && !PinE && !CE){
          if(shippingInfo.FirstName && shippingInfo.LastName && shippingInfo.PhoneNumber && shippingInfo.Address && shippingInfo.PinCode && shippingInfo.City && shippingInfo.State ){
            dispatch(addInfo(shippingInfo))
            navigate("/confirmdetails")
          }else{
            toast.info("Enter Complete details")
          }
        }else{
          toast.info('Enter correct information')
        }
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
      <input className="field__input" onBlur={handleFNameBlur} value={shippingInfo.FirstName} name="FirstName" onChange={handleChange} type="text" id="firstname"  />
    {FNE ? <>{FNE}</>:<></>}
    </label>
    <label className="field">
      <span className="field__label" for="lastname">Last name</span>
      <input className="field__input" onBlur={handleLNameBlur} value={shippingInfo.LastName} name="LastName" onChange={handleChange} type="text" id="lastname" />
    {LNE?<>{LNE}</>:<></>}
    </label>
  </div>
  <label className="field">
      <span className="field__label" for="lastname">Contact Number</span>
      <input className="field__input" onBlur={handlePhoneBlur} value={shippingInfo.PhoneNumber} name="PhoneNumber" onChange={handleChange} type="number" id="lastname" />
    {PhE? <>{PhE}</>:<></>}
    </label>
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
      <input className="field__input" onBlur={handlePinBlur} value={shippingInfo.PinCode} name="PinCode" onChange={handleChange} type="text" id="zipcode" />
    {PinE ? <>{PinE}</>:<></>}
    </label>
    <label className="field">
      <span className="field__label" for="city">City</span>
      <input className="field__input" onBlur={handleCityBlur} value={shippingInfo.City} name="City" onChange={handleChange} type="text" id="city" />
    {CE? <>{CE}</>:<></>}
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