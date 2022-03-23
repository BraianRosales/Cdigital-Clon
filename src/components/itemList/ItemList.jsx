import React, { useContext } from "react";
import Item from "../item/Item";
import { Grid } from "@mui/material";
import SmallCart from "../smallCart/SmallCart";
import { CartContext } from "../Context/CartContext";

const ItemList = ({ products, stateSearchText }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);

  return (
    <div className="wrap">
      <div className="list-title">Productos encontrados: {products.length}</div>
      <Grid container sx={{ marginBottom: "125px" }} columns={12}>
        <Grid item xs={9}>
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
        <Grid item xs={3}>
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
  );
};

export default ItemList;
