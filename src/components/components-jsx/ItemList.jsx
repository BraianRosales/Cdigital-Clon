import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div id="layout">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
