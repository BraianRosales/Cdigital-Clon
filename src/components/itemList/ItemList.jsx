import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const ItemList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="layout">
          {products.map((product) => {
            return (
              <div className="box" key={product.id}>
                <Item product={product} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;
