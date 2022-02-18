import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import mockApi from "./../../mockApi.json";
import Spinner from "./../spinner/Spinner";

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function findItem() {
      return mockApi.find((p) => p.id === id);
    }

    function getItem() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(findItem());
          setIsLoading(false);
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
    <div id="itemDetail">
      {isLoading ? <Spinner /> : <ItemDetail item={item} img={item.image} />}
    </div>
  );
};
export default ItemDetailContainer;
