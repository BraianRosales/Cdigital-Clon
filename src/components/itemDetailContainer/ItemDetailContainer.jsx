import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import db from "../../firebaseConfig/firebaseConfig";
import ItemList from "../itemList/ItemList";
import Spinner from "./../spinner/Spinner";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = ({ id, searchText, stateSearchText }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      const getItem = async () => {
        const q = query(collection(db, "items"), where(documentId(), "==", id));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItem(docs[0]);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };
      getItem();
    } else {
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
    }
  }, [id, searchText]);

  return (
    <>
      {searchText === "" ? (
        <div id="itemDetail">
          {isLoading ? (
            <div className="layout" id="spinner-itemDetailContainer">
              <Spinner />
            </div>
          ) : (
            <ItemDetail item={item} />
          )}
        </div>
      ) : (
        <div>
          <ItemList products={products} stateSearchText={stateSearchText} />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
