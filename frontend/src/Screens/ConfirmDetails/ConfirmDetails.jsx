import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../../features/cartSlice";
import { clearInfo } from "../../features/shippingInfoSclice";
// import { cartTotal } from "../../features/cartSlice";

import "./ConfirmDetails.css";

export default function ConfirmDetails() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const shipinfo = useSelector((state) => state.shipinfo.shippingInfo);

  const [points, setPoints] = useState(0);
  const [applyPoints, setApplyPoints] = useState(0);

  const handleChange = (e) => {
    setPoints(e.target.value);
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Classic ${localStorage.getItem("authToken")}`,
    },
  };

  const handleApply = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/findpoints",
        config
      );
      console.log(points)
      console.log(data.points)
      if(data.points >= points){
        setApplyPoints(points);
      } else {
        toast.error("Insuffiecient points");
        setApplyPoints(0);
      }
    } catch (err) {}
  };

  const handlePlaceOrder = async () =>{
    // dispatch(cartTotal(cart.cartTotalAmount - applyPoints))
    // cart.cartTotalAmount = cart.cartTotalAmount - applyPoints;
    try{
      console.log(applyPoints)
      const {data} = await axios.post("http://localhost:3001/placeorder",{cart,shipinfo,applyPoints},config)
      navigate("/")
      dispatch(clearCart())
      dispatch(clearInfo())
      console.log(data.message)
      toast(`${data.message}`)
    }catch(err){

    }
  }

  useEffect(() => {
    if (!(shipinfo.length > 0)) {
      navigate("/shippingdetails");
    }
  });
  // console.log(cart);
  // console.log(shipinfo);
  // console.log(points)
  return (
    <div className="container con-container">
      <div className="shipInfo">
        <h2>Confirm Details</h2>
        <hr />
        {shipinfo.length > 0 ? (
          <>
            <div className="row">
              <h4 className="col-sm">
                <span>First Name : </span>
                {shipinfo[0].FirstName}
              </h4>
              <h4 className="col-sm">
                <span>Last Name : </span>
                {shipinfo[0].LastName}
              </h4>
            </div>
            <h4>
              <span>Contact Number : </span>
              {shipinfo[0].PhoneNumber}
            </h4>
            <h4>
              <span>Address : </span>
              {shipinfo[0].Address}
            </h4>
            <div className="row">
              <h4 className="col-sm">
                <span>Pin Code : </span>
                {shipinfo[0].PinCode}
              </h4>
              <h4 className="col-sm">
                <span>City : </span>
                {shipinfo[0].City}
              </h4>
              <h4 className="col-sm">
                <span>State : </span>
                {shipinfo[0].State}
              </h4>
            </div>
            <hr />
            {cart.cartItems.map((product) => (
              <div className="row" key={product.price + product.SelectedSize}>
                <div className="col-sm">
                  <div className="row">
                    <img
                      className="col-sm"
                      src={product.Image.url}
                      alt="product-img"
                    />
                    <h4 className="col-sm" style={{ fontSize: "15px" }}>
                      {product.ProductName}
                    </h4>
                    <div className="row"></div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row">
                    <h4 className="col-sm" style={{ textAlign: "center" }}>
                      {product.price} * {product.cartQuantity}
                    </h4>
                    <h4 className="col-sm" style={{ textAlign: "center" }}>
                      <span>= {product.price * product.cartQuantity}</span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            <hr />
            <div className="row total_price">
              <h4 className="col-sm">
                <span>Subtotal</span>
              </h4>
              <h4 className="col-sm total_end">
                <span>Rs. {cart.cartTotalAmount} /-</span>
              </h4>
            </div>
            <div className="row total_price">
              <h4 className="col-sm">
                <span>Apply Points</span>
              </h4>
              <div className="col-sm total_end">
                {applyPoints > 0 ? (
                  <span>{applyPoints}</span>
                ) : (
                  <>
                    <input
                      type="number"
                      name="points"
                      value={points}
                      style={{width:'8rem'}}
                      onChange={handleChange}
                    />
                    <button className="btn btn-dark product-btn" style={{fontSize:'11px'}} onClick={handleApply}>
                      Apply
                    </button>
                  </>
                )}
                {/* <span>Rs. {cart.cartTotalAmount} /-</span> */}
              </div>
            </div>
            <hr />
            <div className="row total_price">
              <h4 className="col-sm">
                <span>Total</span>
              </h4>
              <h4 className="col-sm total_end">
                <span>Rs. {cart.cartTotalAmount - applyPoints} /-</span>
              </h4>
            </div>
            <div className="row">
            <button className="btn btn-dark btn-lg btn-block product-btn product-btn-wish" onClick={handlePlaceOrder}>
              Place Order
            </button>

            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
