import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SectionHead from "../SectionHead/SectionHead";


import './BestSeller.css';


export default function BestSeller(){

    const [products, setProducts] = useState();
    
    const getProduct = () =>{
        axios.get(`http://localhost:3001/api/brand/mamaearth`)
        .then((res)=>{
        //   console.log(res.data.products)
          setProducts(res.data.products);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      useEffect(()=>{
        getProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    
    // console.log(products)
    return(
        <>
        
        <div id="wrap">
            <SectionHead title="New brand launched"/>
            <div id="columns" className="columns_4">
                {
                    products?.slice(0,8).map((product)=>(
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
                    ))
                }

            </div>
        </div>

        
        </>
    )
}