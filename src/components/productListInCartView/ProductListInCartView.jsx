import React from "react";
import ProductInCartView from "../productInCartView/ProductInCartView";

const ProductListInCartView = ({ products, removeItem, onAdd }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductInCartView
          key={product.id}
          product={product}
          removeItem={removeItem}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductListInCartView;
