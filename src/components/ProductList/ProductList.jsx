import React from "react";
import Product from "../Product/Product";
import { Products } from "../../data";
import "./styles.css";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h3 className="pl-title">My Projects</h3>
        <p className="pl-desc">
          Here are some of the projects that I worked on.
        </p>
      </div>
      <div className="pl-list">
        {Products.map((prod) => {
          return <Product img={prod.img} link={prod.link} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
