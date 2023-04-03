import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHead from "../../Components/SectionHead/SectionHead";
import './CategoryScreen.css'


// screen to display products by catogery, example :- men,women,kids
// navigate from navbar 


export default function CategoryScreen(){
    const [products,setProducts] = useState()

    const params = useParams();


    useEffect(()=>{
        const getProducts = () =>{
            axios.get(`http://localhost:3001/api/shop/${params.category}`)
            .then((res)=>{
                console.log(res.data.products)
                setProducts(res.data.products)
            })
            .catch((err)=>{
                if(err)
                console.log(err)

            })
        }

        getProducts();
    },[params.category])


    return(
        <>
        <div className="category-screen">
        <div id="wrap">
            <SectionHead title={params.category}/>

            <div id="columns" className="columns_4">
            {
                products?.map((product)=>(
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
        </div>
        </>
    )
}