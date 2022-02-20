import React from "react";
import Grid from "@mui/material/Grid";
import ProductListInCartView from "../productListInCartView/ProductListInCartView";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const Cart = ({ items, removeItem, addItem, clear, totalPrice }) => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{ background: "#f2f2f2", border: "1px solid #cccccc" }}
        mt={3}
        mb={3}
        pb={1}
      >
        <Grid item xs={4}>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              clear();
            }}
          >
            Vaciar carrito
          </button>
          <Link to="/">
            <button style={{ cursor: "pointer" }}>Seguir comprando</button>
          </Link>
        </Grid>

        <Grid item xs={4}></Grid>

        <Grid container xs={4}>
          <Grid item xs={6} mt={4} sx={{ fontSize: "22px" }}>
            <div className="total">Total: ${totalPrice().toFixed(2)}</div>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Button
              sx={{ width: "90%", cursor: "pointer" }}
              variant="contained"
              disableElevation
            >
              Pagar
            </Button>
          </Grid>
          <Grid item>
            <p
              style={{
                fontSize: "12px",
                float: "left",
                marginTop: "4px",
                marginBottom: "5px",
              }}
            >
              Las promociones se aplicarán al momento del cobro.
            </p>
          </Grid>
        </Grid>
      </Grid>
      {/*------------------------------Division--------------------------------  */}

      <Grid
        container
        spacing={3}
        sx={{
          background: "#f2f2f2",
          border: "1px solid #cccccc",
        }}
        mt={3}
        mb={3}
      >
        <Grid item xs={1}>
          <CardMedia
            component="img"
            sx={{
              width: "75%",
              marginLeft: "-20px",
              marginTop: "-22px",
              padding: "8px",
            }}
            image={
              "https://static.cotodigital3.com.ar/sitios/cdigi/static/content/images/cvirtual/imagenes/ic_truck.png"
            }
          />
        </Grid>
        <Grid item xs={11}>
          <h3 style={{ marginLeft: "-50px", marginTop: "-7px" }}>
            ENVIO A DOMICILIO
          </h3>
        </Grid>
      </Grid>

      {/*------------------------ Division--------------------------------*/}
      <h2 style={{ color: "#6dc5e9", marginLeft: "-22px" }}>Productos</h2>
      <Grid container spacing={3} mt={3} mb={1}>
        <Grid container xs={4}>
          <p>Articulos y cantidad</p>
        </Grid>

        <Grid item xs={4}></Grid>

        <Grid container xs={4}>
          <Grid>Precio</Grid>
          <Grid item xs={6}>
            Total
          </Grid>
        </Grid>
      </Grid>

      <hr></hr>
      {/*---------------------------Products---------------------------- */}
      <ProductListInCartView
        products={items}
        removeItem={removeItem}
        onAdd={addItem}
      />

      {/*------------------------Division-----------------------------------  */}
      <Grid
        container
        spacing={3}
        sx={{ background: "#f2f2f2", border: "1px solid #cccccc" }}
        mt={3}
        mb={3}
        pb={1}
      >
        <Grid item xs={4}>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              clear();
            }}
          >
            Vaciar carrito
          </button>
          <Link to="/">
            <button style={{ cursor: "pointer" }}>Seguir comprando</button>
          </Link>
        </Grid>

        <Grid item xs={4}></Grid>

        <Grid container xs={4}>
          <Grid item xs={6} mt={4} sx={{ fontSize: "22px" }}>
            <div className="total">
              Total: <span>${totalPrice().toFixed(2)}</span>
            </div>
          </Grid>

          <Grid item xs={6} mt={2}>
            <Button
              sx={{ width: "90%", cursor: "pointer" }}
              variant="contained"
              disableElevation
            >
              Pagar
            </Button>
          </Grid>
          <Grid item>
            <p
              style={{
                fontSize: "12px",
                float: "left",
                marginTop: "4px",
                marginBottom: "5px",
              }}
            >
              Las promociones se aplicarán al momento del cobro.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
