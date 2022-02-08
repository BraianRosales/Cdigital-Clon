import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import ItemListContainer from "./components/components-jsx/ItemListContainer";
import Header from "./components/components-jsx/Header";
import ItemDetailContainer from "./components/components-jsx/ItemDetailContainer";

const greeting = "Indica la galletita con la cantidad que queres agregar!";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <ItemDetailContainer/>
    </>
  );
};

export default App;
