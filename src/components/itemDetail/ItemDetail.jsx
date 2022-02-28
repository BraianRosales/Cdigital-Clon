import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ItemCount from "../itemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ItemsListInCart from "../itemListInCart/ItemsListInCart";
import { CartContext } from "../Context/CartContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item }) => {
  const [render, setRender] = useState(true);
  const [items, removeItem, addItem, clear] = useContext(CartContext);

  function onAdd(quantify) {
    setRender(false);
    addItem(
      item.id,
      item.name,
      item.price,
      quantify,
      item.image,
      item.description
    );
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
          <Grid item xs={4} sx={{ paddingLeft: "80px!important" }}>
            <CardContent>
              <Box
                className="box-in-product"
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={30}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={18}
                >
                  {item.description}
                </Typography>
              </Box>
              <Box
                className="box-in-product"
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#299f6a",
                  fontWeight: "600",
                }}
              >
                Precio regular
              </Box>
              <Box className="price box-in-product">${item.price}</Box>
              <hr></hr>
              {render ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
              ) : (
                <CardContent>
                  <p style={{ textAlign: "center", color: "#22e122" }}>
                    ¡Se agrego la cantidad al carrito!
                  </p>
                  <Link to="/cart">
                    <Button
                      variant="contained"
                      id="btn-add"
                      sx={{
                        color: "white",
                        width: "73%",
                        display: "block",
                        margin: "0px auto",
                      }}
                    >
                      Terminar mi compra
                    </Button>
                  </Link>
                </CardContent>
              )}
            </CardContent>
          </Grid>
          <Grid item xs={3} sx={{ paddingLeft: "80px!important" }}>
            <Item
              sx={{
                paddingLeft: "50px",
                paddingRight: "50px",
                height: "440px",
                border: "1px solid #d7d7d7",
                overflow: "auto",
              }}
            >
              <ItemsListInCart items={items} removeItem={removeItem} />
            </Item>
            <button onClick={() => clear()}>Vaciar carrito</button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ItemDetail;
