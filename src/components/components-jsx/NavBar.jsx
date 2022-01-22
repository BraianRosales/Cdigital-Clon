const Brand = "CdigitalClone";

const NavBar = () => {
  return (
    <nav id="navBar">
    <div id="brand">{Brand}</div>
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
    </nav>
  );
};

export default NavBar;
