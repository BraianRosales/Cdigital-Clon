import React, { useContext, useEffect, useState } from "react";
import Item from "../item/Item";
import { Grid } from "@mui/material";
import SmallCart from "../smallCart/SmallCart";
import { CartContext } from "../Context/CartContext";
import Spinner from "../spinner/Spinner";

const ItemList = ({ products, stateSearchText }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="height-view">
      {isLoading ? (
        <div className="layout">
          <Spinner />
        </div>
      ) : (
        <div className="wrap">
          <div className="list-title">
            Productos encontrados: {products.length}
          </div>
          <Grid container sx={{ marginBottom: "125px" }} columns={12}>
            <Grid item xs={12} sm={12} md={9}>
              <div className="item-list">
                <div className="layout">
                  {products.map((product) => {
                    return (
                      <div className="box" key={product.id}>
                        <Item
                          product={product}
                          addItem={addItem}
                          items={items}
                          removeItem={removeItem}
                          stateSearchText={stateSearchText}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Grid>
            <Grid item xs={9} sm={7} md={3}>
              <SmallCart
                items={items}
                allItems={allItems}
                totalPrice={totalPrice}
                removeItem={removeItem}
                addItem={addItem}
                clear={clear}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ItemList;
