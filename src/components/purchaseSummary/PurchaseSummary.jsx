import React from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PurchaseSummary = ({
  totalPrice,
  totalPlusShipping,
  isRendering,
  idBuyer,
}) => {
  return (
    <>
      <Grid item xs={4}>
        <Item sx={{ paddingBottom: "20px" }}>
          <h3 id="title-box" className="text-resume">
            Resumen de la compra
          </h3>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} mt={2}>
              <p className="text-resume">Subtotal</p>
            </Grid>
            <Grid item xs={6} mt={2}>
              <p className="price-resume">${totalPrice()}</p>
            </Grid>
            <Grid item xs={6} mt={2}>
              <p className="text-resume">Envio</p>
            </Grid>
            <Grid item xs={6} mt={2}>
              <p className="price-resume">$349.00</p>
            </Grid>
            <Grid item xs={6} mt={2}>
              <h2 className="text-resume">Total</h2>
            </Grid>
            <Grid item xs={6} mt={2}>
              <h2 className="price-resume" id="total-price-resume">
                ${totalPlusShipping()}
              </h2>
            </Grid>
          </Grid>
          {isRendering ? (
            <Button
              variant="contained"
              id="btn-resume"
              onClick={() => {
                Swal.fire({
                  title: "Atencion!",
                  text: `Compra satisfactoria! su id es: ${idBuyer}`,
                  icon: "success",
                  confirmButtonText: "Ok",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/";
                  }
                });
              }}
            >
              ID compra
            </Button>
          ) : (
            <Button variant="contained" disabled sx={{ marginTop: "20px" }}>
              ID compra
            </Button>
          )}
        </Item>
      </Grid>
    </>
  );
};

export default PurchaseSummary;
