import React, { useEffect, useState } from "react";
import ItemList from "../../components-jsx/ItemList";
import mockApi from "../../../mockApi.json";

const Home = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getProducts() {
      return new Promise((resolve, reject) => {
        resolve(mockApi);
      });
    }
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div id="p-greeting">{greeting}</div>
      <ItemList products={products} />
    </div>
  );
};

export default Home;
