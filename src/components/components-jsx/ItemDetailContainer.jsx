import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import mockApi from "./../../mockApi.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  let id = 2;

  useEffect(() => {
    function findItem() {
      return mockApi.find((p) => p.id === id);
    }

    function getItem() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(findItem());
        }, 2000);
      });
    }

    getItem()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};
export default ItemDetailContainer;
