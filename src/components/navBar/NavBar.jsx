import React, { useContext } from "react";
import CartWidget from "../cartWidget/CartWidget";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const NavBar = () => {
  const [items, removeItem, addItem, clear, allItems] = useContext(CartContext);
  return (
    <nav id="navBar">
      <Logo />
      <div className="wrap">
        {items.length > 0 ? (
          <Link to="/cart">
            <CartWidget allItems={allItems} />
          </Link>
        ) : (
          <p></p>
        )}
        <ul>
          <Link className="li" to="/category/almacen">
            Almacén
          </Link>
          <Link className="li" to="/category/bebidas">
            Bebidas
          </Link>
          <Link className="li" to="/category/frescos">
            Frescos
          </Link>
          <Link className="li" to="/category/congelados">
            Congelados
          </Link>
          <Link className="li" to="/category/limpieza">
            Limpieza
          </Link>
          <Link className="li" to="/category/perfumeria">
            Perfumeria
          </Link>
          <Link className="li" to="/category/electro">
            Electro
          </Link>
          <Link className="li" to="/category/textil">
            Textil
          </Link>
          <Link className="li" to="/category/hogar">
            Hogar
          </Link>
          <Link className="li" to="/category/aireLibre">
            Aire libre
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
