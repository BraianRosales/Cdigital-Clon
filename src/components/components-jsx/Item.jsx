import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import ItemCount from "./ItemCount";
import Typography from "@mui/material/Typography";

export default function Item({ product }) {
  return (
    <>
      <Card
        sx={{
          border: "1px solid #d7d7d7",
          mt: "10px",
          width: "18%",
          float: "left",
          marginTop: "80px",
          marginLeft: "22px",
        }}
      >
        <CardMedia component="img" image={`/${product.image}`} alt="Imagen" />
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
          <ItemCount stock={product.stock} initial="1" wd={100} />
        </CardContent>
      </Card>
    </>
  );
}
