import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import Header from "./components/components-jsx/Header";
import Home from "./components/views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewItemDetail from "./components/views/ItemDetail/ViewItemDetail";
import ViewCategoryNav from "./components/views/CategoryNav/ViewCategoryNav";

const greeting = "Indica la galletita con la cantidad que queres agregar!";

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting={greeting} />} />
        <Route path="/item/:id" element={<ViewItemDetail />} />
        <Route path="/category/:id" element={<ViewCategoryNav />} />
      </Routes>
    </Router>
  );
};

export default App;
