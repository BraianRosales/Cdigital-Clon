import React, { useEffect, useState } from "react";
import mockApi from "./../../mockApi.json";
import ItemList from "./ItemList";

const NavDetailContainer = (category) => {
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    function mapItemsCategory() {
      console.log(category);
      return mockApi.filter((p) => p.category === category.category);
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
    <div>
      {" "}
      <ItemList products={productsCategory} />
    </div>
  );
};

export default NavDetailContainer;
