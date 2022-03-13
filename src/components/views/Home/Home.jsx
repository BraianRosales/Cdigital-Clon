import React, { useEffect, useState } from "react";
import ItemList from "../../itemList/ItemList";
import db from "../../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import Spinner from "../../spinner/Spinner";
import Catalogs from "../../catalogs/Catalogs";

const Home = ({ listTitle, searchText }) => {
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
    <div>
      {isLoading ? (
        <div className="layout">
          <Spinner />
        </div>
      ) : (
        <div>
          {searchText === "" ? (
            <Catalogs />
          ) : (
            <div>
              <div className="wrap list-title">{listTitle}</div>
              <ItemList products={searchProducts} listTitle={listTitle} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
