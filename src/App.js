import "./App.css";
import NavBar from "./components/components-jsx/NavBar";
import Header from "./components/components-jsx/Header";
import Home from "./components/views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewItemDetail from "./components/views/ViewItemDetail/ViewItemDetail";
import ViewCategoryNav from "./components/views/ViewCategoryNav/ViewCategoryNav";
import ViewError404 from "./components/views/ViewError404/ViewError404";

const greeting = "Indica la galletita con la cantidad que queres agregar!";

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting={greeting} />} />
        <Route path="/item/:id" element={<ViewItemDetail />} />
        <Route path="/category/:categoryId" element={<ViewCategoryNav />} />
        <Route path="*" element={<ViewError404 />} />
      </Routes>
    </Router>
  );
};

export default App;
