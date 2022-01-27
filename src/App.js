import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import ItemListContainer from "./components/components-jsx/ItemListContainer";
import Header from "./components/components-jsx/Header";

const greeting = "Agrega o remove galletitas!";

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
