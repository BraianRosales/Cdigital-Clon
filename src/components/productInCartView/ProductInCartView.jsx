import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "../itemCount/ItemCount";
import db from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CircularStatic from "../circularStatic/CircularStatic";
import { Link } from "react-router-dom";

const ProductInCartView = ({ item, removeItem, addItem, removeItemCart }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1520);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, []);

  function stockProduct() {
    const product = productsData.find((product) => product.id === item.id);
    return product.stock;
  }

  function itemPrice() {
    return item.price * item.quantify;
  }

  function onAdd() {
    addItem(item.id, item.name, item.price, item.image, item.description);
  }

  return (
    <>
      <Grid container spacing={3} mt={3} mb={3}>
        <Grid container xs={5} className="productInCart-description-content">
          <Grid xs={6} sm={8} md={1} mt={4}>
            <button
            className="x-product-delete"
             
              onClick={() => {
                removeItemCart(item.id);
              }}
            >
              X
            </button>
          </Grid>

          <Grid xs={12} sm={8} md={4}>
            <Link to={`/item/${item.id}`}>
              <CardMedia
                component="img"
                className="productInCart-img"
                image={item.image}
                alt="product"
              />
            </Link>
          </Grid>
          <Grid className="productInCart-description" mt={4} xs={7}>
            {item.description}
          </Grid>
        </Grid>

        <Grid xs={3}></Grid>

        <Grid container xs={12} sm={8} md={4}>
          <Grid className="itemCount-div">
            {isLoading ? (
              <div style={{ marginLeft: "42px", marginTop: "15px" }}>
                <CircularStatic />
              </div>
            ) : (
              <>
                <div className="stock">Stock: {stockProduct()}</div>
                <ItemCount
                  onAdd={onAdd}
                  cartItem={item}
                  stock={stockProduct()}
                  removeItem={removeItem}
                />
                <br />
                <div id="price-product-cart">${item.price}</div>
              </>
            )}
          </Grid>
          <Grid className="product-total-count " xs={6}>
            ${itemPrice().toFixed(2)}
          </Grid>
        </Grid>
      </Grid>
      <hr></hr>
    </>
  );
};

export default ProductInCartView;
