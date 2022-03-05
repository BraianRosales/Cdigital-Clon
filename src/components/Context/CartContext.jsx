// ------------------------------------------CONTEXT API------------------------------------------
import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

// STATE que le pasamos al useState
const initialState = [];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  //-------------------------------FUNCTIONS---------------------------------
  function removeItem(itemId) {
    const foundItem = items.find((item) => item.id === itemId);
    if (foundItem.quantify > 1) {
      foundItem.quantify -= 1;
      setItems([...items]);
    } else {
      Swal.fire({
        title: "Atencion",
        text: "¿Querés eliminar este producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado!", "Su producto ha sido eliminado.", "success");
          const updateItems = items.filter((item) => item.id !== itemId);
          setItems(updateItems);
        }
      });
    }
  }

  function isInCart(itemId) {
    return items.some((item) => item.id === itemId);
  }

  function addItem(itemId, itemName, itemPrice, itemImage, itemDescription) {
    if (isInCart(itemId)) {
      const foundItem = items.find((item) => item.id === itemId);
      foundItem.quantify += 1;
    } else {
      items.push({
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantify: 1,
        image: itemImage,
        description: itemDescription,
      });
    }
    setItems([...items]);
  }

  function clear() {
    setItems([]);
  }

  function allItems() {
    return items.length;
  }

  function totalPrice() {
    let total = items.reduce(
      (acc, product) => acc + product.price * product.quantify,
      0
    );
    return total.toFixed(2);
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
