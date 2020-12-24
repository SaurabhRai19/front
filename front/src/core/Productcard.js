import React from 'react';
import { Link } from 'react-router-dom';
import "../coreStyles/Productcard.css";
import ImageHelper from "./helper/ImageHelper";
import Productdetail from "./Productdetail";

export default function Productcard({product}) {
    const openProductdetails=(product)=>{
       return <Productdetail product={product} />
    }
    return (
            <div className="cards">
            <ImageHelper product={product} />
            <div className="product-btns">
                <a href="" className="btn-round mr-2"><i class="fa fa-shopping-cart"></i></a>
                <Link to={`/product/${product._id}`} product={product} className="view">VIEW</Link>
                <a href="" className="btn-small mr-2"><i class="fa fa-inr">{product.price}</i></a>
            </div>
                    
            </div>
    )
}
