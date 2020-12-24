import React from "react";
import { API } from "../../backend";

//we have made this route such that when it fires will return response as a photo/binary file
//so assigning it with source src will dynamically assign photos from DB
const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="rounded border border-success p-2">
      <video
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        controls
      />
    </div>
  );
};

export default ImageHelper;