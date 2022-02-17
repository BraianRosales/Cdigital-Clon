import React, { useContext } from "react";
// Context
import { ProductsContext } from "../Context/ProductsContext";
import ItemInCart from "./ItemInCart";

const ItemsListInCart = () => {
  const [items, removeItem, addItem, clear] = useContext(ProductsContext);

  console.log("DATA", items);

  return (
    <div>
      <h3>Carrito</h3>
      {items.map((item) => {
        return <ItemInCart key={item.id} data={item} removeItem={removeItem} />;
      })}
      <button onClick={() => clear()}>Vaciar carrito</button>
    </div>
  );
};

export default ItemsListInCart;
