import React,{ useState } from 'react';
import Base from "./Base";
import { Redirect, Link } from "react-router-dom";
import "../coreStyles/loginsignup.css";

import { signin, authenticate, isAutheticated } from "../auth/helper";
export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false //did redirect if user is able to succesfully sign in we need to redirect him somewhere probably user dashboard
      });
    
      const { email, password, error, loading, didRedirect } = values;
      const { user } = isAutheticated();
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    //for keeping user continuously signed in browser dont understand json response after signin so we check it using window and set the
    //jsonwebtoken jwt
    //for this authenticate we need to pass the data and due to next in it we can use callback  
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error, loading: false });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });
            }
          })
          .catch(console.log("signin request failed"));
      };
    
      const performRedirect = () => {
        if (didRedirect) {
          if (user && user.role === 1) {
            return <Redirect to="/user" />;
          } else {
            return <Redirect to="/user" />;
          }
        }
        if (isAutheticated()) {
          return <Redirect to="/" />;
        }
      };
    
      const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
    
      const signInForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    className="form-control"
                    type="email"
                  />
                </div>
    
                <div className="form-group">
                  <label className="text-light">Password</label>
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    className="form-control"
                    type="password"
                  />
                </div>
                <button onClick={onSubmit} className="btn btn-block colorbutton">
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        );
      };
    return (
        <div>
        <h1>335BAZAAR</h1>
        <div className="logincontainer">
            <h2>SIGN IN</h2>
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            </div>
            <div className="alreadyhaveacc"><Link to="/register">Don't have an account?</Link></div>
            <Base />
            </div>
    )
}
