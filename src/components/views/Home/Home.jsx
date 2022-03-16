import React, { useEffect, useState } from "react";
import ItemList from "../../itemList/ItemList";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import Spinner from "../../spinner/Spinner";
import Catalogs from "../../catalogs/Catalogs";

const Home = ({ searchText, stateSearchText }) => {
  const [searchProducts, setSearchProducts] = useState([]);
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
      setSearchProducts(docs);
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
      )}
    </div>
  );
};

export default Home;
