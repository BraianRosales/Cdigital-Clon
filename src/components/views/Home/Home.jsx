import React, { useEffect, useState } from "react";
import ItemList from "../../itemList/ItemList";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Home = ({ greeting }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div id="p-greeting">{greeting}</div>
      <ItemList products={productsData} />
    </div>
  );
};

export default Home;
