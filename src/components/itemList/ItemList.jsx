import React, { useEffect, useState, useContext } from "react";
import Item from "../item/Item";
import Spinner from "../spinner/Spinner";
import { Grid } from "@mui/material";
import ItemsListInCart from "../itemsListInCart/ItemsListInCart";
import { CartContext } from "../Context/CartContext";

const ItemList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div>
              <div id="layout">
                {products.map((product) => {
                  return (
                    <div className="box" key={product.id}>
                      <Item product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              overflow: "auto",
            }}
          >
            <h3 id="title-small-cart">
              Mi Compra
              {items.length > 0 ? <span>{allItems()} items</span> : <></>}
            </h3>
            {items.length > 0 ? (
              <>
                <p id="total-p">
                  Total: <span>${totalPrice()}</span>
                </p>
                <div className="small-cart">
                  <ItemsListInCart items={items} removeItem={removeItem} />
                </div>
                <div id="clear-small-cart">
                  <hr></hr>
                  Vaciar carrito
                </div>
              </>
            ) : (
              <div className="small-cart">
                <p id="p-cart">
                  No tiene ningún artículo en el carro de compra.
                </p>
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ItemList;
