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
        <div className="cart-container">
            <h2>Wish list</h2>
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
            <div className="cart-empty">
          <p>Your wishlist is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
            </>)
        }
        
        </div>
    )
}