import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemInCart = ({ data, removeItem }) => {
  return (
    <div>
      <Card
        sx={{
          width: "80%",
          marginTop: "25px",
          marginBottom: "35px",
          backgroundColor: "#f9ffdb",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            width={100}
            image={data.image}
            alt="item.img"
          />
          <CardContent>
            {data.name}
            <p>${data.price}</p>
            <p>cantidad: {data.quantify}</p>
          </CardContent>
        </CardActionArea>
        <Button
          id="btn-quitar"
          sx={{
            color: "white",
            width: "100%",
            background: "#c16262",
            display: "block",
            margin: "0px auto",
            borderRadius: "0px",
            height: "40px",
          }}
          onClick={() => {
            removeItem(data.id);
          }}
        >
          <DeleteIcon />
        </Button>
      </Card>
    </div>
  );
};

export default ItemInCart;
