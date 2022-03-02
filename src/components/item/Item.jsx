import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Item({ product }) {
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
        <CardContent>
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
          <Button variant="contained" id="btn-add" sx={{ width: "100%" }}>
            Agregar
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
