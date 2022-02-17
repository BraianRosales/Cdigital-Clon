
// ------------------------------------------CONTEXT API------------------------------------------
import React, { createContext, useState } from "react";

// 1 - CREAR EL CONTEXTO
export const ProductsContext = createContext();

// STATE que le pasamos al useState
const initialState = [];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  //FUNCTIONS
  function removeItem(itemId) {
    const updateItems = items.filter((item) => item.id !== itemId);
    setItems(updateItems);
  }

  function isInCart(itemId) {
    return items.some((item) => item.id === itemId);
  }

  function addItem(itemId, itemName, itemPrice, itemQuantify, img) {
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
      });
    }
    setItems([...items]);
  }

  function clear() {
    setItems([]);
  }

  // 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
  return (
    <ProductsContext.Provider value={[items, removeItem, addItem, clear]}>
      {/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
      {children}
    </ProductsContext.Provider>
  );
};
