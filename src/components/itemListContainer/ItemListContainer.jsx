import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import db from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = ({
  listTitle,
  category,
  searchText,
  stateSearchText,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      const getProductsCategory = async () => {
        const q = query(
          collection(db, "items"),
          where("category", "==", category)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      };
      getProductsCategory();
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
  }, [category, searchText]);

  return (
    <div>
      <ItemList products={products} stateSearchText={stateSearchText} />
    </div>
  );
};
export default ItemListContainer;
