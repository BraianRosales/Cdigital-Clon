import React, { useEffect, useState } from "react";
import ItemList from "../../itemList/ItemList";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import Catalogs from "../../catalogs/Catalogs";

const Home = ({ searchText, stateSearchText }) => {
  const [searchProducts, setSearchProducts] = useState([]);

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
      setSearchProducts(docs);
    };
    getProductsSearch();
  }, [searchText, stateSearchText]);

  return (
    <div className="height-view">
      <div>
        {searchText === "" ? (
          <div id="catalogs">
            <Catalogs stateSearchText={stateSearchText} />
          </div>
        ) : (
          <div>
            <ItemList
              products={searchProducts}
              stateSearchText={stateSearchText}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
