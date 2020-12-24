import React from "react";
import Base from "../desktopCore/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import "./styles.css";
const AdminDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAutheticated();

  const adminRightSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-info">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-info">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-info">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-info">
              Manage Products
            </Link>
          </li>
        {/*}  <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-info">
              Manage Orders
            </Link>
          </li>*/}
        </ul>
      </div>
    );
  };
//here in the rightSide we have kept static info but it is prefered to show graph,charts in admin dashboard 
  const adminLeftSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-warning">Admin Area</span>
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container bg-info p-4"
    >
      <div className="row">
        <div className="col-8">{adminLeftSide()}</div>
        <div className="col-4">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
