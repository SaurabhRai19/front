import React from 'react'
import Base from "./Base";
import "../coreStyles/User.css";
import image from "../resource/userimage.png";
import download from "../resource/download.jpg";
import lamp from "../resource/lamp.jpg";
import { signout, isAutheticated} from "../auth/helper/index";
import { Link } from "react-router-dom";


export default function User({ history }) {
    
    const {
        user
    } = isAutheticated();
    return (
        <div>
        {isAutheticated() ? (
        <div id="corediv">
            <div className="username_container">
                <p className="signout"><span
            className="text-white signout" //in order to do so onClick itself gives a callback which u can fire directly where we fire the signout
            onClick={() => {   //as after signout we can use callback due to next in it and in that call back we want to redirect to home page or anypage.
              signout(() => {
                history.push("/shop");
              });
            }}
          >
            Signout
          </span></p>
                <img id="circle" src={image}></img>
                <p>{user.name}</p>
            </div>
            <div className="previous_orders">
                <p>Previous Orders</p>
                <div className="previous_order_cards_container">
                <div className="previous_orders_card" id="first_card">
                    <div>
                    <p>Lamp</p>
                    <img src={lamp} className="previous_order_card_image"/>
                    <button>View</button>
                    </div>
                </div>
                <div className="previous_orders_card">
                    <div>
                        <p>Chair</p>
                        <img src={download} className="previous_order_card_image"/>
                        <button>View</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="preferences">
                <p>Preferences</p>
                <div className="preference_card" id="address_tab">
                <p><i className="fa fa-address-book-o fa-2x logos"></i>Address</p>
                </div>
                <div className="preference_card">
                    <p><i className="fa fa-credit-card fa-2x logos"></i>Credit Cards</p>
                </div>
                <div className="preference_card" id="roa_tab">
                    <p><i className="fa fa-star fa-2x logos"></i>Rate our App</p>
                </div>
            </div>
            <Base />    
        </div>) :
        (   
            <div>
            <h1>335BAZAAR</h1>
            <div className="notloggedin">
            <h2> PLEASE LOGIN</h2>
            <div className="buttonscon">
            <Link to="/register"><button className="buttons">Signup</button></Link>
    <h1>OR</h1>
    <Link to="/login"><button className="buttons">Login</button></Link>
    </div>
            <Base />
            </div>
            </div>
        )}
        </div>
    )
}
