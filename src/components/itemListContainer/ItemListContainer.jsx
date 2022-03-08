import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import db from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = ({ greeting, category }) => {
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
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
      setProductsCategory(docs);
    };
    getProductsCategory();
  }, [category]);

  return (
    <>
      <div id="p-greeting">{greeting}</div>
      <ItemList products={productsCategory} />
    </>
  );
};
export default ItemListContainer;
