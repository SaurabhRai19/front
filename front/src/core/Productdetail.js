import React, { useState, useEffect } from "react";
import Base from "./Base";
import image from "../resource/image.jpg";
import image1 from "../resource/image1.jpg";
import "../coreStyles/Productdetail.css";
import Carousel from "react-bootstrap/Carousel";
import mov_bbb from "../resource/mov_bbb.mp4";
import movie from "../resource/movie.mp4";
import ImageHelper from "./helper/ImageHelper";
import {useParams} from "react-router-dom";
import { getProduct, getCategories } from "../admin/helper/adminapicall";
import { Link } from "react-router-dom";


export default function Productdetail({match}) {

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    qrcode: "",
    color: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    color,
    qrcode,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;
  const product={
    _id: match.params.productId
  }
  const preload = productId => {
    getProduct(productId).then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category._id,
          stock: data.stock,
          qrcode: data.qrcode,
          color: data.color
        });
      }
    });
  };
  //using match to get the productId
  useEffect(() => {
    preload(match.params.productId);
  }, []);

    return (
        <div>
        <div className="container">
                 
        <div className="prodvideo">
        <ImageHelper product={product} className="prodvideo" />
        <div className="overlay overlayLeft">
        <div className="overlayItems">
        <Link to="/shop"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
        <h2>Material:</h2>
        <p>{values.name}</p>
        {console.log(values.name)}
        <h2>SPECIALITY:</h2>
        <p>{values.price}</p>
        <h2>Color:</h2>
        <p>{values.color}</p>
        </div>
        </div>
    </div>
    </div>
    <div className="nameandprice">
    <h1>{values.name}</h1>
    <h1><i className="fa fa-inr lg rupee"></i>{values.price}</h1>
    <p>inclusive of all taxes</p>
    </div>
    <div className="buttonscon">
    <button className="buttons"><i className="fa fa-heart proddeatailbtns"></i>WISHLIST</button>
    <button className="buttons"><i className="fa fa-shopping-bag proddeatailbtns"></i>ADD TO BAG</button>
    </div>
    <Base />
    </div>
    )
}
