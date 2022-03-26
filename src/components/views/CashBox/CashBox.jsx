import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../Context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../../firebaseConfig/firebaseConfig";
import ItemList from "../../itemList/ItemList";
import Spinner from "../../spinner/Spinner";
import Form from "../../form/Form";

const CashBox = ({ searchText, stateSearchText }) => {
  const [items, removeItem, addItem, clear, allItems, totalPrice] =
    useContext(CartContext);
  const [isRendering, setIsRendering] = useState(false);
  const [idBuyer, setIdBuyer] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function totalPlusShipping() {
    let total = (Number(totalPrice()) + 349.0).toFixed(2);
    return total;
  }

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
        <div>
          {searchText === "" ? (
            <div className="height-view" style={{ backgroundColor: "#ecf1f7" }}>
              <div className="wrap-box">
                <Box sx={{ flexGrow: 1, width: "100%" }} pt={8}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                  >
                    <Form
                      setIsRendering={setIsRendering}
                      totalPlusShipping={totalPlusShipping}
                      setIdBuyer={setIdBuyer}
                      idBuyer={idBuyer}
                      totalPrice={totalPrice}
                      isRendering={isRendering}
                      items={items}
                    />
                  </Grid>
                </Box>
              </div>
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

export default CashBox;
