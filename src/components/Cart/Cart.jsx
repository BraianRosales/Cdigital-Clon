import React from "react";
import Grid from "@mui/material/Grid";
import ProductListInCartView from "../productListInCartView/ProductListInCartView";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const Cart = ({
  items,
  removeItem,
  addItem,
  clear,
  allItems,
  totalPrice,
  removeItemCart,
}) => {
  return (
    <div>
      <Grid
        container
        sx={{ background: "#f2f2f2", border: "1px solid #cccccc" }}
        mt={3}
        mb={3}
        pb={1}
      >
        <Grid item xs={12} sm={8} md={4}>
          <button
            className="btn-cart"
            onClick={() => {
              clear();
            }}
          >
            <span className="delete_cart_page"></span>
            Vaciar carrito
          </button>
          <Link to="/">
            <button className="btn-cart">Seguir comprando</button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} md={4}></Grid>

        <Grid className="checkout-cart" container xs={12} sm={8} md={4}>
          <Grid item xs={12} sm={8} md={6} mt={4} sx={{ fontSize: "22px" }}>
            <div className="total">Total: ${totalPrice()}</div>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Link to="/cashBox">
              <Button
                className="btn-pagar-cart"
                sx={{ width: "90%", cursor: "pointer", background: "#0fabd4" }}
                variant="contained"
                disableElevation
              >
                Pagar
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <p className="p-text-cart">
              Las promociones se aplicarán al momento del cobro.
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          background: "#f2f2f2",
          border: "1px solid #cccccc",
          height: "60px",
        }}
        mt={3}
        mb={3}
      >
        <Grid item xs={1}>
          <CardMedia
            component="img"
            className="truck-in-cart"
            image={
              "https://static.cotodigital3.com.ar/sitios/cdigi/static/content/images/cvirtual/imagenes/ic_truck.png"
            }
          />
        </Grid>
        <Grid item xs={11}>
          <h3 id="h3-cart">ENVIO A DOMICILIO</h3>
        </Grid>
      </Grid>

      <h2 id="h2-products-cart">Productos</h2>
      <Grid container mt={3} mb={1}>
        <Grid container xs={4}>
          <p className="p-articles-amount">Articulos y cantidad</p>
        </Grid>

        <Grid item xs={4}></Grid>

        <Grid container xs={4}>
          <Grid className="price-title">Precio</Grid>
          <Grid item xs={6}>
            Total
          </Grid>
        </Grid>
      </Grid>

      <hr></hr>
      {/* Lista de productos dentro del carrito */}
      <ProductListInCartView
        items={items}
        removeItem={removeItem}
        addItem={addItem}
        removeItemCart={removeItemCart}
      />

      <Grid
        container
        sx={{ background: "#f2f2f2", border: "1px solid #cccccc" }}
        mt={3}
        mb={3}
        pb={1}
      >
        <Grid item xs={12} sm={8} md={4}>
          <button
            className="btn-cart"
            onClick={() => {
              clear();
            }}
          >
            <span className="delete_cart_page"></span>
            Vaciar carrito
          </button>
          <Link to="/">
            <button className="btn-cart">Seguir comprando</button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} md={4}></Grid>

        <Grid className="checkout-cart" container xs={12} sm={8} md={4}>
          <Grid item xs={12} sm={8} md={6} mt={4} sx={{ fontSize: "22px" }}>
            <div className="total">Total: ${totalPrice()}</div>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Link to="/cashBox">
              <Button
                className="btn-pagar-cart"
                sx={{ width: "90%", cursor: "pointer", background: "#0fabd4" }}
                variant="contained"
                disableElevation
              >
                Pagar
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <p className="p-text-cart">
              Las promociones se aplicarán al momento del cobro.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
