import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./WishListScreen.css"
import { Link } from "react-router-dom";
import { removeItem } from "../../features/wishlistSlice";

export default function WishListScreen(){
    const wishlist = useSelector((state)=>state.wishList.wishlist)

    const dispatch = useDispatch();

// console.log(wishlist)
    return(
        <div className="container">
            <h2>Your Wish list</h2>
        {wishlist.length > 0 ? 
            (<div className="wrap">
            <div id="columns" className="columns_4">
                {
                    wishlist?.map((product)=>(
                        <figure key={product._id}>
                            <Link  to={`/product/${product._id}`}>
                    <img src={product.Image.url} alt="pimage" />
                    {
                        product.Types[0].price > 300 
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
                </Link>
                    <button className="button" onClick={()=>dispatch(removeItem(product))} >Remove from wishlist</button>
                </figure>
                    ))
                }

            </div>
            </div>) 
            : (<>
            
            </>)
        }
        
        </div>
    )
}