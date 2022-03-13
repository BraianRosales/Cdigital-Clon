import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";

export default function Item({
  product,
  addItem,
  items,
  removeItem,
  stateSearchText,
}) {
  function productInCart() {
    return items.find((item) => item.id === product.id);
  }

  function onAdd() {
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
        <Link
          to={`/item/${product.id}`}
          onClick={() => {
            stateSearchText("");
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt="ups! image no render."
          />
        </Link>
        <CardContent sx={{ minHeight: "218px" }}>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {product.name}
          </Typography>
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
              mt: "10px",
            }}
          >
            Precio regular
          </Typography>
          <div id="item_price">${product.price}</div>
          <Typography
            sx={{ textTransform: "uppercase", mt: "5px", color: "red" }}
          >
            Stock: {product.stock}
          </Typography>
          {productInCart() !== undefined ? (
            <ItemCount
              onAdd={onAdd}
              cartItem={productInCart()}
              stock={product.stock}
              removeItem={removeItem}
            />
          ) : (
            <Button
              variant="contained"
              id="btn-add"
              sx={{ width: "100%" }}
              onClick={() => {
                addItem(
                  product.id,
                  product.name,
                  product.price,
                  product.image,
                  product.description
                );
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
