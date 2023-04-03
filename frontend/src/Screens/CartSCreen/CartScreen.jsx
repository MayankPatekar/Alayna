import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart,decreaseCart, addToCart, clearCart, getTotals } from "../../features/cartSlice";
import "./CartScreen.css";
export default function CartScreen() {
  const cart = useSelector((state) => state.cart);
 const dispatch = useDispatch()
 const navigate = useNavigate();

 useEffect(()=>{
  dispatch(getTotals())
 },[cart, dispatch])

  const handleRemoveFromCart =(cartItem)=>{
    console.log(cartItem)
    dispatch(removeFromCart(cartItem))
  }
  const handleMinusCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseQty =(cartItem) =>{
    dispatch(addToCart(cartItem))
  }
  const handleClearCart = () =>{
    dispatch(clearCart())
    window.scrollTo(0, 0);
  }
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
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
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="Price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="Quantity">Points</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem._id + ""+ cartItem.SelectedSize}>
                <div className="cart-product">
                  <img src={cartItem.Image.url} alt={cartItem.ProductName} />
                  <div>
                    <h3>{cartItem.ProductName}</h3>
                    <p>Size : {cartItem.SelectedSize}</p>
                    <button onClick={()=> handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                    {cartItem.Types.map((type)=>{
                    if(type.size===cartItem.SelectedSize){
                       return <>{type.price}</> 
                    }
                    return <></>
                    })
                    
                    }</div>
                <div className="cart-product-quantity">
                  <button onClick={()=>handleMinusCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={()=>handleIncreaseQty(cartItem)}>+</button>
                </div>
                <div>
                  {
                    cartItem.points? <>{cartItem.points * cartItem.cartQuantity}</>:<>-</>
                  }
                </div>
                <div className="cart-product-total-price">{cartItem.Types.map((type)=>{
                    if(type.size===cartItem.SelectedSize){
                       return <>{type.price * cartItem.cartQuantity}</> 
                    }
                    return <></>
                    })
                    
                    }</div>
              </div>
            ))}

            <div className="cart-summary">
              <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">Rs. {cart.cartTotalAmount} /-</span>
                </div>
                <div className="subtotal">
                  <span>Points Receiving</span>
                  <span className="amount">Rs. {cart.cartTotalPoints} /-</span>
                </div>
                <p>taxes added *</p>
                <button className="btn btn-dark btn-lg" onClick={()=>{navigate("/shippingdetails")}}>Check out</button>
                <div className="continue-shopping">
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
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
