import React, { useEffect, useRef, useState } from "react";
// import Logo from "../../images/logo/Logo.png"
import "./NavBar.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";


import {FaAlignRight,FaSistrix,FaHeart,FaShoppingBag} from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const NavBar = () => {
  const [isUser,setIsUser] = useState();
  const {cartTotalQuantity} = useSelector(state => state.cart)
  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      setIsUser(true);
    }
  },[])
  const navRef = useRef();
  const showNavBar = () =>{
      navRef.current.classList.toggle("responsive-nav");
  }
  
  return (
    <>
    <nav>
    <div className="nav-left">

    <Link to="/"><div className="logo"><img src="/logo/CY-4.png" alt="logo"/><span></span></div></Link>
      <div className="nav-bar" ref={navRef}>
        
          <div><div href="#home-section" onClick={showNavBar}><Link to="/shop/men">Men</Link></div></div>
          <div><div href="#about-section" onClick={showNavBar}><Link to="/shop/women">Women</Link></div></div>
          <div><div href="#skills-section" onClick={showNavBar}><Link to="/shop/kids">Kids</Link></div></div>
          <div><div href="#project-section" onClick={showNavBar}><Link to="/about">About</Link></div></div>
          <div><div href="#project-section" onClick={showNavBar}><Link to="/contact">Contact</Link></div></div>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}> x </button>
      </div>
    </div>
      <div className="social-icons">
        <Link to="/search"><FaSistrix className="nav-icon" onMouseOver={({target})=>target.style.color="rgb(241, 156, 29)"}
    onMouseOut={({target})=>target.style.color="white"}/></Link>
        <Link to="/wishlist"><FaHeart className="nav-icon" onMouseOver={({target})=>target.style.color="red"}
    onMouseOut={({target})=>target.style.color="white"}/></Link>
      <Link to="/cart"><FaShoppingBag className="nav-icon" onMouseOver={({target})=>target.style.color="rgb(241, 156, 29)"}
    onMouseOut={({target})=>target.style.color="white"}/><span style={{position: "relative",
    right: "17px",
    top: "-5px",
    fontSize: "17px",
    background: "rgb(241, 156, 29)",
    color:"black",
    borderRadius: "50px",
    padding: "1px 6px"}}>{cartTotalQuantity}</span></Link>
      {
        isUser ? <ProfileIcon setIsUser={setIsUser} /> :
        <span><Link to="/signin" className="span-link">Sign In</Link></span>
      }

        <button className="nav-btn" onClick={showNavBar}><FaAlignRight className="FaAlignRight" /></button>
      </div>
      
    </nav>
    <Outlet />

      </>
  );
};

export default NavBar;
