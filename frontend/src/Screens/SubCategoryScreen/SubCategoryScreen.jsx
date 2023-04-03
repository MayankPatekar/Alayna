import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import SectionHead from "../../Components/SectionHead/SectionHead";

export default function SubCategoryScreen(){
    const params = useParams();
    const [products, setProducts] = useState();


    
    const getProducts =()=>{
        axios.get(`http://localhost:3001/api/category/${params.subcategory}`)
        .then((res)=>{
            console.log(res.data.products)
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
        <div className="category-screen">
        <div id="wrap">
            <SectionHead title={params.subcategory}/>

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