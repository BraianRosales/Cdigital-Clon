import React from "react";
import Product from "./Product";

const ItemListContainer = (props) => {
  return (
    <div className="wrap">
      <p id="p-greeting">{props.greeting}</p>
      <Product />
    </div>
  );
};

export default ItemListContainer;
