import React, { useState, useEffect } from "react";
import Base from '../core/Base'
import { Link } from "react-router-dom"
import {getOrders,getOrderStatus} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const ManageOrders=()=>{ 
const [orders, setOrders] = useState([]);

const { user, token } = isAutheticated();

const preload = () => {
  getOrders(token,user._id).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log("order opened");
    }
  });
};

useEffect(() => {
  preload();
}, []);



return (
  <Base title="Welcome admin" description="Manage products here">
    <h2 className="mb-4">All Orders:</h2>
    <Link className="btn btn-info" to={`/admin/dashboard`}>
      <span className="">Admin Home</span>
    </Link>
    <div className="row">
      <div className="col-12">
        <h2 className="text-center text-white my-3">ORDERS</h2>

        {orders.map((order, index) => {
          return (
            <div key={index} className="row text-center mb-2 ">
              <div className="col-4">
                <h3 className="text-white text-left">{order.name}</h3>
              </div>
              <div className="col-4">
                <Link
                  className="btn btn-success"
                  to={`/order/${order._id}/status/${user._id}`}
                >
                  <span className="">Order Status</span>
                </Link>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-danger">
                  Delete Will be here
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Base>
);
};;


export default ManageOrders;