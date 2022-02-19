import React, { useContext } from "react";
import Cart from "../../Cart/Cart";
import { CartContext } from "../../Context/CartContext";

const CarritoView = () => {
  const [items, removeItem, addItem, clear] = useContext(CartContext);

  return (
    <div style={{width:"60%"}}>
      <Cart
        items={items}
        removeItem={removeItem}
        addItem={addItem}
        clear={clear}
      />
    </div>
  );
};

export default CarritoView;
