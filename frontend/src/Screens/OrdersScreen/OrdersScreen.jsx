import React, { useEffect, useState } from "react";

import "./OrdersScreen.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function OrdersScreen() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  const FetchOrders = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Classic ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/orders",
        config
      );
      setOrders(data.orders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
    FetchOrders();
  }, [navigate]);

  const handleCancelOrder = async (order) =>{
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Classic ${localStorage.getItem("authToken")}`,
      },
    };
    if(!order.isShipped){
      const id = order._id;
      const {data} = await axios.post("/cancelorder",{id},config);
      toast(`${data.message}`)
    } 
  }

  return (
    <div className="container">
      <h4 className="section-heading">Your Orders</h4>
      {orders &&
        orders
          .slice(0)
          .reverse()
          .map((order) => (
            <div
              className=" container row"
              style={{ margin: "47px 0px" }}
              id={order._id}
            >
              
              <div className="col-sm-5">
                <div className="card">
                  <div className="card-body">
                    <h3>Shipping details</h3>
                    {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">User Email :</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{"email"}</div>
                  </div>
                  <hr /> */}
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {order.shippingDetails[0].FirstName}{" "}
                        {order.shippingDetails[0].LastName}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Contact Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {order.shippingDetails[0].PhoneNumber} 
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {order.shippingDetails[0].Address} {" ,"}
                        {order.shippingDetails[0].City}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Pincode</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {order.shippingDetails[0].PinCode}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {order.shippingDetails[0].State}
                      </div>
                    </div>
                    <hr />
                    {
                      order.isDelivered ? <>Order delivered successfully </> : order.isShipped ? 
                      <>Your Order is shipped</>
                    : <div className="row">
                    {order.isCanceled? <>Your Order is cancelled</> :<button className="btn btn-dark product-btn product-btn-wish" style={{fontSize:"1.5rem"}} onClick={()=>{handleCancelOrder(order)}}>Cancel Order</button>}
                  </div> 
                    }
                    {/* {
                      order.isShipped ? 
                      <>Your Order is shipped</>
                    : <div className="row">
                    {order.isCanceled? <>Your Order is cancel</> :<button className="btn btn-dark" onClick={()=>{handleCancelOrder(order)}}>Cancel Order</button>}
                  </div> 
                    } */}
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="card">
                  <div className="card-body">
                    <h3>Product details</h3>
                    <div className="row">
                      {order.Items.map((product) => (
                        <div
                          className="row"
                          key={product.price + product.SelectedSize}
                        >
                          <div className="col-sm">
                            <div className="row">
                              <img
                                className="col-sm"
                                src={product.Image.url}
                                alt="product-img"
                                style={{
                                  height: "120px",
                                  objectFit: "contain",
                                }}
                              />
                              <h4
                                className="col-sm"
                                style={{ fontSize: "15px" }}
                              >
                                {product.ProductName} {product.SelectedSize}{" "}
                                {product.Types[0].unit}
                              </h4>
                              <div className="row"></div>
                            </div>
                          </div>
                          <div className="col-sm">
                            <div className="row">
                              <h4
                                className="col-sm"
                                style={{ textAlign: "center" }}
                              >
                                {product.price} * {product.cartQuantity}
                              </h4>
                              <h4
                                className="col-sm"
                                style={{ textAlign: "center" }}
                              >
                                <span>
                                  = {product.price * product.cartQuantity}
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                      <hr />
                      <div className="row">
                        <div className="col-sm-9">
                          <h6 className="mb-0">Total Items</h6>
                        </div>
                        <div className="col-sm-3 text-secondary">
                          {order.TotalQuantity}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-9">
                          <h6 className="mb-0">Total Price</h6>
                        </div>
                        <div className="col-sm-3 text-secondary">
                          {order.TotalAmount}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-9">
                          <h6 className="mb-0">Total Point Recived</h6>
                        </div>
                        <div className="col-sm-3 text-secondary">
                          {order.TotalPointsRecived}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-9">
                          <h6 className="mb-0">Total Points Applied</h6>
                        </div>
                        <div className="col-sm-3 text-secondary">
                          {order.TotalPointsApply}
                        </div>
                      </div>

                      <hr />
                      {
                        order.isCanceled ?<></>:(

                      <div className="row">
              <div className="track">
                <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                <div className={order.isPacked ? "step active":"step"}> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text">Packed</span> </div>
                <div className={order.isShipped ? "step active":"step"}> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                <div className={order.isDelivered ? "step active":"step"}> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Delivered</span> </div>
            </div>
              </div>
                        )
                      }

                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm card">
                    <div className="card-body">
                      <h3>User Details</h3>
                    </div>
                  </div> */}
            </div>
          ))}
    </div>
  );
}
