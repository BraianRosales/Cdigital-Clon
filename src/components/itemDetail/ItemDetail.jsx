import React, { useContext } from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);

  function productInCart() {
    return items.find((i) => i.id === item.id);
  }

  function onAdd() {
    addItem(item.id, item.name, item.price, item.image, item.description);
  }

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
            <Link to="/Cart">
              <Button variant="contained" className="btn-lightBlue">
                Terminar la compra
              </Button>
            </Link>
            {productInCart() !== undefined ? (
              <div id="itemCount-detail">
                <ItemCount
                  onAdd={onAdd}
                  cartItem={productInCart()}
                  stock={item.stock}
                  removeItem={removeItem}
                />
              </div>
            ) : (
              <Button
                variant="contained"
                className="btn-lightBlue"
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
            )}
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
      </Card>
    </div>
  );
};

export default ItemDetail;
