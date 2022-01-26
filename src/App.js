import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import ItemListContainer from "./components/components-jsx/ItemListContainer";
import Header from "./components/components-jsx/Header";

const greeting = "Hola! aca van todos los catalagos:";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting={greeting} />
      
    </>
  );
};

export default App;
