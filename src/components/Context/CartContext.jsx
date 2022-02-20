// ------------------------------------------CONTEXT API------------------------------------------
import React, { createContext, useState } from "react";

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

// STATE que le pasamos al useState
const initialState = [];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  //-------------------------------FUNCTIONS---------------------------------
  function removeItem(itemId) {
    const updateItems = items.filter((item) => item.id !== itemId);
    setItems(updateItems);
  }

  function isInCart(itemId) {
    return items.some((item) => item.id === itemId);
  }

  function addItem(
    itemId,
    itemName,
    itemPrice,
    itemQuantify,
    img,
    itemDescription
  ) {
    if (isInCart(itemId)) {
      const foundItem = items.find((item) => item.id === itemId);
      foundItem.quantify += itemQuantify;
    } else {
      items.push({
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantify: itemQuantify,
        image: img,
        description: itemDescription,
      });
    }
    setItems([...items]);
  }

  function clear() {
    setItems([]);
  }

  function allItems() {
    return items.reduce((acc, product) => acc + product.quantify, 0);
  }

  function totalPrice() {
    return items.reduce(
      (acc, product) => acc + product.price * product.quantify,
      0
    );
  }

  // 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
  return (
    <CartContext.Provider
      value={[items, removeItem, addItem, clear, allItems, totalPrice]}
    >
      {/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
      {children}
    </CartContext.Provider>
  );
};
