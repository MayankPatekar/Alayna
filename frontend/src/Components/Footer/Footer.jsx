import React from "react";

import "./Footer.css"
export default function Footer(){
    return(
        <>
        <footer className="footer-distributed">

<div className="footer-left">

  <h3><span><img style={{height: "20vh"}} src="/logo/CY-4.png" alt="" /></span></h3>

  <p className="footer-links">
    <a href="/" className="link-1">Home</a>

    <a href="/">Seller</a>

    <a href="/">Pricing</a>

    <a href="/">About</a>

    <a href="/">pages</a>

    <a href="/">Contact</a>
  </p>

  <p className="footer-company-name">Alayna © 2023</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
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

    <a href="/"><i className="fa fa-facebook"></i></a>
    <a href="/"><i className="fa fa-twitter"></i></a>
    <a href="/"><i className="fa fa-linkedin"></i></a>
    <a href="/"><i className="fa fa-github"></i></a>

  </div>

</div>

</footer>
        
        </>
    )
}