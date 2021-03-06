import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    top: 2,
    padding: "0 4px",
    backgroundColor: "red",
  },
}));

export default function CartWidget({ allItems, totalPrice }) {
  return (
    <IconButton
      aria-label="cart"
      sx={{
        float: "right",
        color: "white",
        backgroundColor: "#47b8d6!important",
        marginLeft: "-50px",
      }}
    >
      <StyledBadge badgeContent={allItems()}>
        <ShoppingCartIcon />
      </StyledBadge>
      <Box id="total-price">${totalPrice()}</Box>
    </IconButton>
  );
}
