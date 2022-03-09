import React from "react";
import ItemListSmallCart from "../itemsListSmallCart/ItemsListSmallCart";

const SmallCart = ({
  items,
  allItems,
  totalPrice,
  removeItem,
  addItem,
  clear,
}) => {
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
            <ItemListSmallCart
              items={items}
              removeItem={removeItem}
              addItem={addItem}
            />
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
