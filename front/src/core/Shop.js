import React, { useEffect, useState} from 'react';
import Base from "./Base";
import "../coreStyles/Shop.css";
import image from "../resource/image.jpg";
import mov_bbb from "../resource/mov_bbb.mp4";
import movie from "../resource/movie.mp4";
import Productcard from "./Productcard";
import { getProducts } from "./helper/coreapicalls";
import Searchbox from "./Searchbox";
import {Link, Redirect} from "react-router-dom";
import "../coreStyles/Productcard.css";
import ImageHelper from "./helper/ImageHelper";


export default function Shop() {
    const [searchfd, setSearchfd] = useState({
        searchfield: ''
      });
    const [productsarr, setProductsarr] = useState([]);
    const [error, setError] = useState(false);
    const onSearchChange = (event) => {
        setSearchfd({ searchfield: event.target.value })
    }
    const { searchfield } = searchfd;
    const loadAllProduct = ()=>{
      getProducts().then(data=>{
        if(data.error){
          setError(data.error);
        }else{
          setProductsarr(data);
        }
      })
    };
    useEffect(() => {
      loadAllProduct();
    }, []);
    const filteredproducts = productsarr.filter(filtering => {
      return filtering.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    const openProductdetails=({product})=>{
      
   }
    return (
        <div>
        <div>
        <h1>335 BAZAAR</h1>
        <div className="bg-white shadow-sm search">
        <Searchbox searchChange={onSearchChange}/>
      </div>
        <div className="grid_container">
          {
            filteredproducts.map((product, index)=>{
              return(
                <div className="cards">
                <ImageHelper product={product} />
                <div className="product-btns">
                    <a href="" className="btn-round mr-2"><i class="fa fa-shopping-cart"></i></a>
                    <Link to={`/product/${product._id}`} className="view">VIEW</Link>
                    <a href="" className="btn-small mr-2"><i class="fa fa-inr">{product.price}</i></a>
                </div>
                        
                </div>
              );
            })
          }
        </div>
        
        </div>
        <Base />
        </div>
    )
}
