import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import mockApi from "./../../mockApi.json";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promiseProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockApi);
      }, 1000);
    });

    promiseProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <p id="p-greeting">{greeting}</p>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
