import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navBar">
      <Logo />
      <div className="wrap">
        <CartWidget />
        <ul>
          <Link className="li" to="/category/:id">Almacén</Link>
          <Link className="li" to="/category/:id">Bebidas</Link>
          <Link className="li" to="/category/:id">Frescos</Link>
          <Link className="li" to="/category/:id">Congelados</Link>
          <Link className="li" to="/category/:id">Limpieza</Link>
          <Link className="li" to="/category/:id">Perfumeria</Link>
          <Link className="li" to="/category/:id">Electro</Link>
          <Link className="li" to="/category/:id">Textil</Link>
          <Link className="li" to="/category/:id">Hogar</Link>
          <Link className="li" to="/category/:id">Aire libre</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
