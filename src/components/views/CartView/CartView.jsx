import React, { useContext, useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemList from "../../itemList/ItemList";
import Spinner from "../../spinner/Spinner";

const CartView = ({ searchText, stateSearchText }) => {
  const [
    items,
    removeItem,
    addItem,
    clear,
    allItems,
    totalPrice,
    removeItemCart,
  ] = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductsSearch = async () => {
      const q = query(
        collection(db, "items"),
        where("typeofproduct", "==", searchText)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProductsSearch();
  }, [searchText]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="height-view">
      {isLoading ? (
        <div className="layout">
          <Spinner />
        </div>
      ) : (
        <div style={{ marginTop: "50px", marginBottom: "100px" }}>
          {searchText === "" ? (
            <div className="cart-content">
              <p className="cart-title">Carro de compras</p>
              {items.length > 0 ? (
                <Cart
                  items={items}
                  removeItem={removeItem}
                  addItem={addItem}
                  clear={clear}
                  totalPrice={totalPrice}
                  removeItemCart={removeItemCart}
                />
              ) : (
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "50px",
                      marginBottom: "25px",
                      fontSize: "20px",
                      color: "red",
                    }}
                  >
                    No tiene ningún artículo en el carro de compra.
                  </p>
                  <Link to="/">
                    <Button
                      className="btn-empty-view"
                      variant="contained"
                      disableElevation
                    >
                      Volver al inicio
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>
              <ItemList products={products} stateSearchText={stateSearchText} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartView;
