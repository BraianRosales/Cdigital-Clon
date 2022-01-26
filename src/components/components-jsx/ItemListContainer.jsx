import React from "react";
import Product from "./Product";

const ItemListContainer = (props) => {
  return (
    <div className="wrap">
      <h3 className="text-center m-5">{props.greeting}</h3>
      <Product />
    </div>
  );
};

export default ItemListContainer;
