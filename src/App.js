import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import ItemListContainer from "./components/components-jsx/ItemListContainer";

const greeting = "Hola! aca van todos los catalagos.";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
};

export default App;
