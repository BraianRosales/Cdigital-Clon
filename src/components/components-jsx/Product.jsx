import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import ItemCount from "./ItemCount";
import Typography from "@mui/material/Typography";

const price = "$176,99";

export default function Product() {
  function onAdd() {
    console.log("Cantidad agregada al carrito!");
  }

  return (
    <>
      <Card sx={{ maxWidth: "18%" }}>
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          image="img/criollitas.jpg"
          alt="Criollita"
        />
        <CardContent>
          <Box
            className="box-in-product"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Criollitas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Galletitas . Criollitas Paq 507 Grm.
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
          <Box className="price box-in-product">{price}</Box>
          <hr></hr>
          <ItemCount stock="5" initial="1" onAdd={onAdd} />
        </CardContent>
      </Card>
    </>
  );
}
