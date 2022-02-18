import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import mockApi from "../../mockApi.json";

const ItemListContainer = ({ greeting, category }) => {
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    function mapItemsCategory() {
      console.log(category);
      return mockApi.filter((p) => p.category === category);
    }

    function getItemsCategory() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mapItemsCategory());
        }, 1000);
      });
    }

    getItemsCategory()
      .then((res) => {
        console.log(res);
        setProductsCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <>
      <div id="p-greeting">{greeting}</div>
      <ItemList products={productsCategory} />
    </>
  );
};

export default ItemListContainer;
