import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import ItemCount from "./ItemCount";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Alert } from "@mui/material";

export default function Item({ product }) {
  let [alert, setAlert] = useState();
  console.log(product);

  function onAdd() {
    setAlert(
      <Alert
        severity="success"
        sx={{
          width: "80%",
          mt: "15px",
          backgroundColor: "rgb(233, 255, 233)",
        }}
      >
        Cantidad agregada carrito!
      </Alert>
    );
  }

  return (
    <>
      <Card
        sx={{
          border: "1px solid #d7d7d7",
          width: "19%",
          mt: "10px",
          ml: "4px",
        }}
      >
        <CardMedia component="img" image={product.image} alt="Criollita" />
        <CardContent>
          <Box
            className="box-in-product"
            sx={{ textAlign: "center", textTransform: "uppercase", mb: 2 }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
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
          <Box className="price box-in-product">{product.price}</Box>
          <hr></hr>
          <ItemCount stock={product.stock} initial="1" onAdd={onAdd} />
        </CardContent>
      </Card>
      <p>{alert}</p>
    </>
  );
}
