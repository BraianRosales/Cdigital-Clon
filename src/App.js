import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import Header from "./components/components-jsx/Header";
import Home from "./components/views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailView from "./components/views/ItemDetails/ItemDetailView";
import Error404 from "./components/views/Error404/Error404";
import CategoriesView from "./components/views/Categories/CategoriesView";

const greeting =
  "Indica la cantidad del productos que queres agregar al carrito!";

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting={greeting} />} />
        <Route path="/item/:id" element={<ItemDetailView />} />
        <Route
          path="/category/:categoryId"
          element={<CategoriesView greeting={greeting} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
