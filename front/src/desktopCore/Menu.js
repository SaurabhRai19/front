import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

//history is something which is given to us by this Link,path is going to come up from the Links
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};
//remember the term conditional rendering 
//if u are using history then need to pass it here as a prop
//fragment is used when we want to return multiple elements
const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
          Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-danger" //in order to do so onClick itself gives a callback which u can fire directly where we fire the signout
            onClick={() => {   //as after signout we can use callback due to next in it and in that call back we want to redirect to home page or anypage.
              signout(() => {
                history.push("/shop");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
//its gonna pick all the routes using the link from the file Routes.js