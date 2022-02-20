import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

const ProductInCartView = ({ product, removeItem}) => {
  return (
    <>
      <Grid container spacing={3} mt={3} mb={3}>
        <Grid container xs={5}>
          <Grid item xs={1} mt={4}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeItem(product.id);
              }}
            >
              X
            </button>
          </Grid>

          <Grid item xs={4}>
            <CardMedia
              component="img"
              sx={{ width: "60%" }}
              image={product.image}
              alt="green iguana"
            />
          </Grid>
          <Grid item mt={4} xs={7}>
            {product.description}
          </Grid>
        </Grid>

        <Grid item xs={3}></Grid>

        <Grid container xs={4}>
          <Grid>
            Aca va itemCount
            <br />
            {product.quantify}
            <br />
            X
            <br />
            ${product.price}
          </Grid>
          <Grid item xs={6}>
            aca va precio total
          </Grid>
        </Grid>
      </Grid>
      <hr></hr>
    </>
  );
};

export default ProductInCartView;
