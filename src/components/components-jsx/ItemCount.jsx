import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";

const ItemCount = ({ stock, initial }) => {
  let [numInitial, setInitial] = useState(Number(initial));

  function handleBtnAdd(e) {
    e.preventDefault();
    if (numInitial > 0) {
      console.log(`Se agrego ${numInitial} productos al carrito.`);
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    if (numInitial < Number(stock)) {
      setInitial(numInitial + 1);
    }
  }

  function handleRemove(e) {
    e.preventDefault();
    if (numInitial > 1) {
      setInitial(numInitial - 1);
    }
  }

  if (stock === "0") {
    numInitial = "0";
  }

  return (
    <div>
      <Box sx={{ textAlign: "center", mt: "10px" }}>
        <Box sx={{ textTransform: "uppercase", my: "5px", color: "red" }}>
          Stock: {stock}
        </Box>
        <CardActions sx={{ justifyContent: "center" }}>
          <ButtonGroup sx={{ border: "1px solid #d5d5d5" }}>
            <Button
              className="btn-card"
              aria-label="reduce"
              sx={{ border: "none" }}
              onClick={handleRemove}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Box mx="20px" mt="5px">
              {numInitial}
            </Box>
            <Button
              className="btn-card"
              aria-label="increase"
              sx={{ border: "none" }}
              onClick={handleAdd}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </CardActions>
        <Button variant="contained" id="btn-add" onClick={handleBtnAdd}>
          Agregar
        </Button>
      </Box>
    </div>
  );
};

export default ItemCount;
