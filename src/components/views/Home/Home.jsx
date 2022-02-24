import React, { useEffect, useState } from "react";
import ItemList from "../../itemList/ItemList";
//FIREBASE
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Home = ({ greeting }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
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
