import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav id="navBar">
      <Logo/>
      <div className="wrap">
        <CartWidget />
        <ul>
          <li>Ofertas</li>
          <li>Almacén</li>
          <li>Bebidas</li>
          <li>Frescos</li>
          <li>Congelados</li>
          <li>Limpieza</li>
          <li>Perfumeria</li>
          <li>Electro</li>
          <li>Textil</li>
          <li>Hogar</li>
          <li>Aire libre</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
