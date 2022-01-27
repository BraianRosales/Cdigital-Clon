import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";


const price = "$176,99";


export default function Product() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(8)

  function handleAddCart(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function handleRemoveCart(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="300"
        sx={{ width: "100%" }}
        image="img/criollitas.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ textAlign: 'center', textTransform: 'uppercase' , color: '#299f6a', fontWeight : '600'}} >Precio regular</Box>
        <Box className="price">{price}</Box>
        <Box sx={{ textAlign: 'center', textTransform: 'uppercase' , color: '#c62828', mb: 2}}>Stock: {stock}</Box>
        <hr></hr>
        <Typography gutterBottom variant="h5" component="div">
          Criollitas
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mb:-1}}>
          Galletitas . Criollitas Paq 507 Grm.
        </Typography>
      </CardContent>
      <CardActions sx={{mb:-1, ml: '6px'}}>
        <Button className="btn"  size="small" onClick={handleAddCart}>Agregar</Button>
        <Button  className="btn"  size="small" onClick={handleRemoveCart}>Remover</Button>
      </CardActions>
      <Box sx={{ ml: '17px' , mb:3, mt: 1}} >Productos carrito: {count}</Box>
    </Card>
  );
}
