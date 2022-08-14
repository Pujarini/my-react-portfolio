import React from "react";
import "./styles.css";

function Product({ img, link }) {
  return (
    <div className="p">
      <div className="browser">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <a href={link} target="__blank">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
}

export default Product;
