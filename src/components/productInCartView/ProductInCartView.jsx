import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "../itemCount/ItemCount";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from "../spinner/Spinner";

const ProductInCartView = ({ item, removeItem, addItem }) => {
  const [productsData, setProductsData] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
      const foundProduct = productsData.find(
        (product) => product.id === item.id
      );
      setProduct(foundProduct);
    };

    getProducts();
  }, [item.id, productsData]);

  function itemPrice() {
    return item.price * item.quantify;
  }

  function onAdd() {
    addItem(item.id, item.name, item.price, item.image, item.description);
  }

  return (
    <>
      <Grid container spacing={3} mt={3} mb={3}>
        <Grid container xs={5}>
          <Grid xs={1} mt={4}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeItem(item.id);
              }}
            >
              X
            </button>
          </Grid>

          <Grid xs={4}>
            <CardMedia
              component="img"
              sx={{ width: "60%" }}
              image={item.image}
              alt="product"
            />
          </Grid>
          <Grid mt={4} xs={7}>
            {item.description}
          </Grid>
        </Grid>

        <Grid xs={3}></Grid>

        <Grid container xs={4}>
          <Grid>
            {isLoading ? (
              <Spinner />
            ) : (
              <ItemCount
                onAdd={onAdd}
                cartItem={item}
                stock={product.stock}
                removeItem={removeItem}
              />
            )}
            <br />
            <div id="price-item-cart">${item.price}</div>
          </Grid>
          <Grid sx={{ marginTop: "40px", fontWeight: "bold", fontSize:"20px" }} xs={6}>
            ${itemPrice().toFixed(2)}
          </Grid>
        </Grid>
      </Grid>
      <hr></hr>
    </>
  );
};

export default ProductInCartView;
