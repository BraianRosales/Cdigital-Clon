import React from "react";
import ProductInCartView from "../productInCartView/ProductInCartView";

const ProductListInCartView = ({
  items,
  removeItem,
  addItem,
  removeItemCart,
}) => {
  return (
    <div className="productListInCartView">
      {items.map((item) => (
        <ProductInCartView
          key={item.id}
          item={item}
          removeItem={removeItem}
          addItem={addItem}
          removeItemCart={removeItemCart}
        />
      ))}
    </div>
  );
};

export default ProductListInCartView;
