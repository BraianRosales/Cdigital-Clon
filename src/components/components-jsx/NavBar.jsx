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
