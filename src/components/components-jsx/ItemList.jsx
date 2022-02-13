import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

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
        <div className="wrap">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/item/${product.id}`}>
                  <Item product={product} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;
