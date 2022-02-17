import React, { useContext } from "react";
// Context
import { CartContext } from "../Context/CartContext";
import ItemInCart from "./ItemInCart";

const ItemsListInCart = () => {
  const [items, removeItem, addItem, clear] = useContext(CartContext);

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
