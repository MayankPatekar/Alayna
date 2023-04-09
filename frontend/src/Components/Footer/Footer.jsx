import React from "react";

import "./Footer.css"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
export default function Footer(){
    return(
        <>
        <footer className="footer-distributed">

<div className="footer-left">

  <h3><span><img style={{height: "20vh"}} src="/logo/CY-4.png" alt="" /></span></h3>

  <p className="footer-links">
    <a href="/" className="link-1">Home</a>

    <a href="/about">About</a>

    <a href="/shop/men">Men</a>
    <a href="/shop/women">Women</a>
    <a href="/shop/kids">Kids</a>

    <a href="/contact">Contact</a>
  </p>

  <p className="footer-company-name">Alayna © 2023</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>107 Lab </span> SMT. Chandibai Himathmal<br/> Mansukhani College , ulhasnagar(west)</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p style={{color: "white"}} className="footer-company-about">
    <span>About the company</span>
    E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
  </p>

  <div className="footer-icons">

    <a href="/"><i className="fa fa-facebook"><FaInstagram /></i></a>
    <a href="/"><i className="fa fa-twitter"><FaFacebookF /></i></a>
    <a href="/"><i className="fa fa-linkedin"><FaYoutube/></i></a>
    <a href="/"><i className="fa fa-github"><FaWhatsapp /></i></a>

  </div>

</div>

</footer>
        
        </>
    )
}