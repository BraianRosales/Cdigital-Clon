import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SmallCart from "../smallCart/SmallCart";
import { CartContext } from "../Context/CartContext";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ItemDetail = ({ item }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);

  return (
    <div className="wrap">
      <Card sx={{ boxShadow: "none", mt: "100px" }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <Item sx={{ border: "1px solid #d7d7d7", padding: "0px" }}>
              <CardMedia component="img" image={item.image} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <div>
              <div id="description-detail">{item.description}</div>
            </div>
            <div id="detail-container">
              <div id="regular-price">PRECIO REGULAR</div>
              <span id="price-detail"> ${item.price}</span>
              <div id="stock-detail">Stock: {item.stock}</div>
            </div>
            <span>
              <FormControlLabel
                sx={{ marginTop: "30px", marginLeft: "50px" }}
                control={<Checkbox {...label} color="success" />}
                label="Comparar"
              />
            </span>
            <Button
              variant="contained"
              className="btn-detail"
              onClick={() => {
                addItem(
                  item.id,
                  item.name,
                  item.price,
                  item.image,
                  item.description
                );
              }}
            >
              Agregar
            </Button>
          </Grid>
          <Grid item xs={3}>
            <SmallCart
              items={items}
              allItems={allItems}
              totalPrice={totalPrice}
              removeItem={removeItem}
              clear={clear}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ItemDetail;
