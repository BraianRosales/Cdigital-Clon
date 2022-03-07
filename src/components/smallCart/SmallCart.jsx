import React from "react";
import ItemsListInCart from "../itemsListInCart/ItemsListInCart";

const SmallCart = ({ items, allItems, totalPrice, removeItem, clear }) => {
  return (
    <div id="small-cart">
      <h3 id="title-small-cart">
        Mi Compra
        {items.length > 0 ? <span>{allItems()} items</span> : <></>}
      </h3>
      {items.length > 0 ? (
        <>
          <div id="total-small-cart">
            Total: <span>${totalPrice()}</span>
          </div>
          <div id="list-small-cart">
            <ItemsListInCart items={items} removeItem={removeItem} />
          </div>
          <div
            id="clear-small-cart"
            onClick={() => {
              clear();
            }}
          >
            <hr></hr>
            Vaciar carrito
          </div>
        </>
      ) : (
        <div id="small-cart-cleansed">
          <div id="text-cart">
            No tiene ningún artículo en el carro de compra.
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallCart;
