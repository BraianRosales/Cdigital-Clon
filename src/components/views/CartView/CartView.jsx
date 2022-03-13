import React, { useContext, useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemList from "../../itemList/ItemList";
import Spinner from "../../spinner/Spinner";

const CartView = ({ listTitle, searchText, stateSearchText }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);
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
    <>
      {isLoading ? (
        <div className="layout">
          <Spinner />
        </div>
      ) : (
        <div style={{marginTop:"50px"}}>
          {searchText === "" ? (
            <div style={{ width: "60%" }}>
              <p
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  marginLeft: "-22px",
                }}
              >
                Carro de compras
              </p>
              {items.length > 0 ? (
                <Cart
                  items={items}
                  removeItem={removeItem}
                  addItem={addItem}
                  clear={clear}
                  totalPrice={totalPrice}
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
                    No tiene ningún artículo en el carro de compra.{" "}
                  </p>
                  <Link to="/">
                    <Button
                      sx={{
                        width: "15%",
                        display: "block",
                        margin: "0px auto",
                        background: "#47b8d6",
                      }}
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
              <div className="wrap list-title">{listTitle}</div>
              <ItemList products={products} stateSearchText={stateSearchText} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartView;
