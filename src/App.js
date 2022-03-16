import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/header/Header";
import Home from "./components/views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailView from "./components/views/ItemDetails/ItemDetailView";
import Error404 from "./components/views/Error404/Error404";
import CategoriesView from "./components/views/Categories/CategoriesView";
import CartView from "./components/views/CartView/CartView";
import { ItemsProvider } from "./components/Context/CartContext";
import CashBox from "./components/views/CashBox/CashBox";
import Footer from "./components/footer/Footer";

const App = () => {
  const [searchText, setSearchText] = useState("");

  function stateSearchText(text) {
    setSearchText(text);
  }

  return (
    <Router>
      <ItemsProvider>
        <Header stateSearchText={stateSearchText} />
        <NavBar stateSearchText={stateSearchText} />
        <Routes>
          <Route
            path="/"
            element={
              <Home searchText={searchText} stateSearchText={stateSearchText} />
            }
          />
          <Route
            path="/item/:id"
            element={
              <ItemDetailView
                searchText={searchText}
                stateSearchText={stateSearchText}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <CategoriesView
                searchText={searchText}
                stateSearchText={stateSearchText}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartView
                searchText={searchText}
                stateSearchText={stateSearchText}
              />
            }
          />
          <Route
            path="/cashBox"
            element={
              <CashBox
                searchText={searchText}
                stateSearchText={stateSearchText}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </ItemsProvider>
    </Router>
  );
};

export default App;
