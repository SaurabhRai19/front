import React, {useState} from 'react'
import "../coreStyles/Signup.css";
import Base from "./Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import "../coreStyles/loginsignup.css";
export default function Register() {
    
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
      });
    
      const { name, email, password, error, success } = values;
    
      //whatever comes in name keep on passing to event these are knwon as higher order functions and this name gets changed into email and password as well
      //... loads existing values and then in [] can define the values to be updated
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      //this onSubmit runs after clicking the submit button and by setValues setting the values we pass this to the signup method in auth/helper/index
      //which automatically fires up and gives back the response
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
          .then(data => {
            if (data.error) { //if there happens some error or missing field
              setValues({ ...values, error: data.error, success: false });
            } else {
              setValues({
                ...values, //now reseting all feilds 
                name: "",
                email: "",
                password: "",
                error: "",
                success: true
              });
            }
          })
          .catch(console.log("Error in signup")); 
      };
    
      const signUpForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-light">Name</label>
                  <input
                    className="form-control"
                    onChange={handleChange("name")}
                    type="text"
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input
                    className="form-control"
                    onChange={handleChange("email")}
                    type="email"
                    value={email}
                  />
                </div>
    
                <div className="form-group">
                  <label className="text-light">Password</label>
                  <input
                    onChange={handleChange("password")}
                    className="form-control"
                    type="password"
                    value={password}
                  />
                </div>
                <button onClick={onSubmit} className="btn btn-block colorbutton">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        );
      };
    
      const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                New account was created successfully. Please
                <h1><Link to="/login">  Login Here</Link></h1>
              </div>
            </div>
          </div>
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
    

    return (
        <div>
            <h1>335BAZAAR</h1>
            <div className="logincontainer">
            <h2>SIGN UP HERE</h2>
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            </div>
            <div className="alreadyhaveacc"><Link to="/login">Already have an account?</Link></div>
            <p id="passasphoneno">*Please enter phone number as password</p>
            <Base />
        </div>
    )
}
