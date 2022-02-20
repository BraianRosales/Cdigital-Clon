import React, { useContext } from "react";
import Cart from "../../Cart/Cart";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CarritoView = () => {
  const [items, removeItem, addItem, clear] = useContext(CartContext);

  return (
    <div style={{ width: "60%" }}>
      <p style={{ fontSize: "30px", marginTop: "20px", marginLeft: "-22px" }}>
        Carro de compras
      </p>
      {items.length > 0 ? (
        <Cart
          items={items}
          removeItem={removeItem}
          addItem={addItem}
          clear={clear}
        />
      ) : (
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "25px",
              fontSize: "20px",
              color: "red",
            }}
          >
            No tiene ningún artículo en el carro de compra.{" "}
          </p>
          <Link to="/">
            <Button
              sx={{
                width: "15%",
                display: "block",
                margin: "0px auto",
                background: "#47b8d6",
              }}
              variant="contained"
              disableElevation
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarritoView;
