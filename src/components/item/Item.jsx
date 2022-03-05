import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// MEJORAR CONDICIONES. PROBAR RETORNANDO EL ITEM BUSCADO CON VARIABLES.

export default function Item({ product, addItem, items, removeItem }) {
  const [itemCountEnabled, setItemCountEnabled] = useState(false);

  function cartItem() {
    return items.find((item) => item.id === product.id);
  }

  const updateProductTrue = async () => {
    const productRef = doc(db, "products", `${product.id}`);
    await updateDoc(productRef, {
      isCounting: true,
    });
  };

  function onAdd() {
    updateProductTrue();
    setItemCountEnabled(true);
    addItem(
      product.id,
      product.name,
      product.price,
      product.image,
      product.description
    );
  }

  return (
    <>
      <Card sx={{ maxWidth: 213 }}>
        <Link to={`/item/${product.id}`}>
          <CardMedia
            component="img"
            image={product.image}
            alt="ups! image no render"
          />
        </Link>
        <CardContent sx={{ minHeight: "218px" }}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Source Sans Pro,sans-serif !important",
              lineHeight: "21px !important",
              fontWeight: "lighter",
            }}
          >
            {product.description}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#299f6a",
              fontSize: " 0.8rem",
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Precio regular
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "21px" }}>
            ${product.price}
          </Typography>
          <Typography
            sx={{ textTransform: "uppercase", my: "5px", color: "red" }}
          >
            Stock: {product.stock}
          </Typography>
          {(product.isCounting || itemCountEnabled) &&
          cartItem() !== undefined ? (
            <ItemCount
              onAdd={onAdd}
              cartItem={cartItem()}
              stock={product.stock}
              removeItem={removeItem}
            />
          ) : (
            <Button
              variant="contained"
              id="btn-add"
              sx={{ width: "100%" }}
              onClick={() => {
                onAdd();
              }}
            >
              Agregar
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
