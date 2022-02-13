import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item, img }) => {
  const [render, setRender] = useState(true);

  function onAdd() {
    setRender(false);
    return console.log("agregaste producto al carrito");
  }

  return (
    <div className="wrap">
      <Card sx={{ boxShadow: "none", mt: "100px" }}>
        <Box sx={{ width: "60%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item sx={{ border: "1px solid #d7d7d7" }}>
                <CardMedia component="img" image={`/${img}`} />
              </Item>
            </Grid>
            <Grid item xs={6} sx={{ paddingLeft: "90px!important" }}>
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
                <Box className="price box-in-product">{item.price}</Box>
                <hr></hr>
                {render ? (
                  <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                ) : (
                  <CardContent>
                    <p style={{ textAlign: "center", color: "#22e122" }}>
                      ¡Se agrego la cantidad al carrito!
                    </p>
                    <Button
                      variant="contained"
                      id="btn-add"
                      onClick={onAdd}
                      sx={{
                        color:"white",
                        width: "73%",
                        display: "block",
                        margin: "0px auto",
                      }}
                    >
                      <Link style={{color:"white"}} to="/cart">Terminar mi compra</Link>
                    </Button>
                  </CardContent>
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
};

export default ItemDetail;
