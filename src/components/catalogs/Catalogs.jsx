import React from "react";
import { Link } from "react-router-dom";

const Catalogs = ({ stateSearchText }) => {
  return (
    <>
      <div className="grid-layout wrap">
        <div
          className="image-box fish"
          onClick={() => {
            stateSearchText("pescados");
          }}
        >
          <span id="content-fish">
            <span id="p1-span">Conoce nuestras</span>
            <span id="p2-span">Ofertas de pescaderia</span>
            <span id="p3-span">Exclusivo online</span>
          </span>
        </div>
        <div
          className="image-box juices"
          onClick={() => {
            stateSearchText("jugos");
          }}
        >
          <span id="content-juices">
            <span id="p1-span">Bebidas sin alcohol</span>
            <span id="p2-span">Agregale mas sabor a tu semana</span>
          </span>
        </div>
        <div
          className="image-box alcohol"
          onClick={() => {
            stateSearchText("vinos");
          }}
        >
          <span id="content-alcohol">
            <span id="p1-span">Bebidas con alcohol vinos</span>
            <span id="p2-span">Descubri aqui toda nuestra variedad</span>
          </span>
        </div>
        <Link to="/category/rotiseria" className="image-box delicatessen">
          <span id="content-delicatessen">
            <span id="p-span">Nuestra Rotiseria</span>
          </span>
        </Link>
        <div
          className="image-box bakery"
          onClick={() => {
            stateSearchText("facturas");
          }}
        >
          <span id="content-bakery">
            <span id="p-span">Faturas Ricas</span>
          </span>
        </div>
        <div
          className="image-box pasta"
          onClick={() => {
            stateSearchText("pastas");
          }}
        >
          <span id="content-pasta">
            <span id="p-span">Pastas Caseras</span>
          </span>
        </div>
      </div>

      <div className="grid-layout-electros wrap">
        <Link to="/category/electro" className="image-box electros">
          <div id="content-electros">
            <span id="p1-span">Electrodomésticos</span>
            <br />
            <span id="p2-span">conocé aquí nuestra seccion</span>
          </div>
        </Link>
        <div
          className="image-box televisores"
          onClick={() => {
            stateSearchText("televisores");
          }}
        >
          <span id="p-span">Televisores</span>
        </div>
        <div
          className="image-box heladeras"
          onClick={() => {
            stateSearchText("heladeras");
          }}
        >
          <span id="p-span">Heladeras</span>
        </div>
        <div
          className="image-box climatizacion"
          onClick={() => {
            stateSearchText("aires");
          }}
        >
          <span id="p-span">Climatizacion</span>
        </div>
        <div
          className="image-box desayuno"
          onClick={() => {
            stateSearchText("desayuno");
          }}
        >
          <span id="p-span">Desayuno</span>
        </div>
      </div>
    </>
  );
};

export default Catalogs;
