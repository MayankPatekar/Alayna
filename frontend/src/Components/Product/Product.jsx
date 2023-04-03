import React from "react";

import './Product.css'
import { Link } from "react-router-dom";

export default function Product({product}){

    return(
        
            <>
            {/* <SectionHead title="New brand launched"/> */}
            
                        <Link key={product._id} to={`/product/${product._id}`}>
                        <figure >
                    <img src={product.Image.url} alt="pimage" />
                    {
                        product.Types[0].price > 400 
                        ? 
                        <img src="/logo/Reward_logo.png" style={{position:"absolute",zIndex: "10",
                        right: "-18px",
                        top: "-12px",
                        width: "57px",
                        height: "70px",
                        border: "none"}}
                        className="prod-logo" 
                        alt=""
                        />
                        : <></>
                    }
                    <figcaption>
                        {product.ProductName} 
                    </figcaption>
                    <span className="price">Rs. {product.Types[0].price} /-</span>
                    <a className="button" href="/" >Buy Now</a>
                </figure></Link>
                        </>
        
    )
}