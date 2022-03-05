import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const InitialBuyer = {
  daliveryTime: "",
  streetAndHeight: "",
  location: "",
  name: "",
  phone: "",
  email: "",
};

const initialPurchase = {
  buyer: "",
  items: [],
  date: "",
  total: "",
};

const CashBox = () => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const purchase = initialPurchase;
  const [buyer, setBuyer] = useState(InitialBuyer);
  const [idBuyer, setIdBuyer] = useState("");
  const [successfulAlert, setSuccessfulAlert] = useState("");

  function totalPlusShipping() {
    let total = (Number(totalPrice()) + 349.0).toFixed(2);
    return total;
  }

  function handleClickAccept() {
    setIsLoading(true);
  }

  function onChange(e) {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  }

  function onChangeDate(e) {
    purchase.date = e.target.value;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    purchase.buyer = buyer;
    purchase.items = items;
    purchase.total = totalPlusShipping();
    const docRef = await addDoc(collection(db, "shopping"), {
      purchase,
    });
    console.log("Document written with ID: ", docRef.id);
    setIdBuyer(docRef.id);
    clear();
  };

  return (
    <Grid container sx={{ background: "#f9f9f9", paddingBottom: "80px" }}>
      <div className="wrap-box">
        <Box sx={{ flexGrow: 1 }} mt={8}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={8}>
              <Item>
                <div style={{ textAlign: "center" }}>
                  <Grid item xs={6} md={12} mt={5}>
                    <h3 id="title-box">Forma de pago</h3>
                    <p id="p-box">
                      Seleccioná la fecha de entrega y banda horaria para la
                      entrega de tus pedidos
                    </p>
                  </Grid>
                  <Grid
                    mt={5}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <div>
                        <p>Envio a domicilio - Supermercado</p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <Link to="/">
                        <button style={{ cursor: "pointer" }}>
                          Seguir comprando
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          style={{ cursor: "pointer", marginLeft: "10px" }}
                        >
                          volver al carrito
                        </button>
                      </Link>
                    </Grid>
                  </Grid>
                  {/* ACA COMIENZA EL FORMULARIO / SEPARAR EN OTRO COMPONENTE EL FORMULARIO */}
                  <Item
                    sx={{
                      marginTop: "30px",
                      marginBottom: "30px",
                      paddingTop: "18px",
                      width: "70%",
                    }}
                  >
                    <form onSubmit={onSubmit}>
                      <div id="div-date">
                        <label>Fecha de entrega más cercana</label>
                        <br />
                        <input
                          type="date"
                          name="date"
                          onChange={onChangeDate}
                        />
                      </div>
                      <div id="div-select">
                        <p id="p-select">Rango horario</p>
                        <select
                          id="select"
                          name="daliveryTime"
                          onChange={onChange}
                          defaultValue={"DEFAULT"}
                        >
                          <option value="DEFAULT" disabled>
                            Horarios de entrega
                          </option>
                          <option value="13 a 18hs">de 13 a 18hs</option>
                          <option value="18 a 22hs">de 18 a 22hs</option>
                          <option value="9 a 13hs">de 9 a 13hs</option>
                        </select>
                      </div>
                      <div className="clearFix"></div>
                      <Grid item xs={12} mt={3}>
                        <div>
                          <h3>Datos personales</h3>
                        </div>
                      </Grid>
                      <input
                        type="text"
                        className="input-form"
                        placeholder="Calle y altura"
                        name="streetAndHeight"
                        onChange={onChange}
                      />
                      <input
                        type="text"
                        className="input-form"
                        placeholder="Localidad"
                        name="location"
                        onChange={onChange}
                      />
                      <input
                        type="text"
                        className="input-form"
                        placeholder="Nombre completo"
                        name="name"
                        onChange={onChange}
                      />
                      <input
                        type="tel"
                        className="input-form"
                        placeholder="Telefono"
                        name="phone"
                        onChange={onChange}
                      />
                      <input
                        type="email"
                        className="input-form"
                        placeholder="E-mail"
                        name="email"
                        onChange={onChange}
                      />
                      {!isLoading ? (
                        <button
                          id="btn-form"
                          onClick={() => {
                            handleClickAccept();
                          }}
                        >
                          ACEPTAR
                        </button>
                      ) : (
                        <button id="btn-form-disable">Aceptar</button>
                      )}
                    </form>
                  </Item>
                  {/* TERMINA FORMULARIO */}
                </div>
              </Item>
            </Grid>
            {/* ACA COMIENZA EL RESUMEN DE LA COMPRA SEPARARLO EN OTRO COMPONENTE */}
            <Grid item xs={6} md={4}>
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
                {isLoading ? (
                  <Button
                    variant="contained"
                    id="btn-resume"
                    onClick={() => {
                      setSuccessfulAlert(
                        `Compra satisfactoria! su id es: ${idBuyer}`
                      );
                    }}
                  >
                    Confirmar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disabled
                    sx={{ marginTop: "20px" }}
                  >
                    Confirmar
                  </Button>
                )}
              </Item>
              <span>{successfulAlert}</span>
            </Grid>
            {/* ACA TERMINA EL RESUMEN DE LA COMPRA */}
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};

export default CashBox;