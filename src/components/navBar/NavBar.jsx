import React, { useContext } from "react";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const NavBar = ({ stateSearchText }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);
  return (
    <nav id="navBar">
      <div
        onClick={() => {
          stateSearchText("");
        }}
      >
        <Logo />
      </div>
      <div className="wrap">
        {items.length > 0 ? (
          <Link
            to="/cart"
            onClick={() => {
              stateSearchText("");
            }}
          >
            <CartWidget allItems={allItems} totalPrice={totalPrice} />
          </Link>
        ) : (
          <p></p>
        )}
        <ul>
          <Link
            className="li"
            to="/category/almacen"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Almacén
          </Link>
          <Link
            className="li"
            to="/category/bebidas"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Bebidas
          </Link>
          <Link
            className="li"
            to="/category/frescos"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Frescos
          </Link>
          <Link
            className="li"
            to="/category/congelados"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Congelados
          </Link>
          <Link
            className="li"
            to="/category/limpieza"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Limpieza
          </Link>
          <Link
            className="li"
            to="/category/perfumeria"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Perfumeria
          </Link>
          <Link
            className="li"
            to="/category/electro"
            onClick={() => {
              stateSearchText("");
            }}
          >
            Electro
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
