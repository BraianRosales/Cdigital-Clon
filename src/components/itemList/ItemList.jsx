import React, { useEffect, useState, useContext } from "react";
import Item from "../item/Item";
import Spinner from "../spinner/Spinner";
import { Grid } from "@mui/material";
import SmallCart from "../smallCart/SmallCart";
import { CartContext } from "../Context/CartContext";

const ItemList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid container sx={{ marginBottom: "50px" }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div>
              <div id="layout">
                {products.map((product) => {
                  return (
                    <div className="box" key={product.id}>
                      <Item
                        product={product}
                        addItem={addItem}
                        items={items}
                        removeItem={removeItem}
                      />
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
            <SmallCart
              items={items}
              allItems={allItems}
              totalPrice={totalPrice}
              removeItem={removeItem}
              clear={clear}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ItemList;
