import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import mockApi from "./../../mockApi.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const id = 4;

  useEffect(() => {
    function productFind(mockApi) {
      return mockApi.find((p) => p.id === id);
    }

    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productFind(mockApi));
      }, 2000);
    });

    getItem
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
