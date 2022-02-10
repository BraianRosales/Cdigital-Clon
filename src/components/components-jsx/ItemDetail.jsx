import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item, img }) => {
  return (
    <div className="wrap">
      <Card sx={{ boxShadow: "none" }}>
        <Box sx={{ width: "100%" }}>
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
            <Grid item xs={6}>
              <Item sx={{ boxShadow: "none" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <h1>
                  {item.price}
                  </h1>
                  </Typography>
                </CardContent>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
};

export default ItemDetail;
