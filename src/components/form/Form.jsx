import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import db from "../../firebaseConfig/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import PurchaseSummary from "../purchaseSummary/PurchaseSummary";

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

const Form = ({
  setIsRendering,
  totalPlusShipping,
  setIdBuyer,
  isRendering,
  items,
  idBuyer,
  totalPrice,
}) => {
  const [buyer, setBuyer] = useState(InitialBuyer);
  const purchase = initialPurchase;
  const [errorMsg, setErrorMsg] = useState(false);
  const [eMail, setEMail] = useState("");
  const [confirmationEMail, setConfirmationEMail] = useState("");

  function onChange(e) {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  }

  function onChangeDate(e) {
    purchase.date = e.target.value;
  }

  function onChangeEmailConfirmation(e) {
    setConfirmationEMail(e.target.value);
  }

  function onChangeEMail(e) {
    const eMail = e.target.value;
    setEMail(e.target.value);
    buyer.email = eMail;
  }

  function emptyEmail() {
    return eMail === "";
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (emptyEmail() || eMail !== confirmationEMail) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setIsRendering(true);
      purchase.buyer = buyer;
      purchase.items = items;
      purchase.total = totalPlusShipping();
      const docRef = await addDoc(collection(db, "shopping"), {
        purchase,
      });
      setIdBuyer(docRef.id);
    }
  };

  return (
    <>
      <Grid item xs={12} sm={8} md={8}>
        <Item>
          <div style={{ textAlign: "center" }}>
            <Grid item xs={12} sm={12} md={12} mt={5}>
              <h3 id="title-box">Forma de pago</h3>
              <p id="p-box">
                Seleccion?? la fecha de entrega y banda horaria para la entrega
                de tus pedidos
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
                  <p id="p-shipping">Envio a domicilio - Supermercado</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Link to="/">
                  <button className="btn-form-gray">Seguir comprando</button>
                </Link>
                <Link to="/cart">
                  <button className="btn-form-gray">volver al carrito</button>
                </Link>
              </Grid>
            </Grid>
            <Item className="item-form">
              <form onSubmit={onSubmit}>
                <div id="div-date">
                  <label>Fecha de entrega m??s cercana</label>
                  <br />
                  <input type="date" name="date" onChange={onChangeDate} />
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
                  onChange={onChangeEMail}
                />
                <input
                  type="email"
                  className="input-form"
                  placeholder="Confirmacion E-mail"
                  name="emailConfirmation"
                  onChange={onChangeEmailConfirmation}
                />
                {errorMsg && (
                  <div className="error-msg-form">
                    E-mail vacio o no coinciden los E-mail.
                  </div>
                )}
                {!isRendering ? (
                  <button id="btn-form">ACEPTAR</button>
                ) : (
                  <button id="btn-form-disable">Aceptar</button>
                )}
              </form>
            </Item>
          </div>
        </Item>
      </Grid>
      <PurchaseSummary
        totalPrice={totalPrice}
        totalPlusShipping={totalPlusShipping}
        isRendering={isRendering}
        idBuyer={idBuyer}
      />
    </>
  );
};

export default Form;
