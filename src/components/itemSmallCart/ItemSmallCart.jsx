import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ItemCount from "../itemCount/ItemCount";
import db from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from "../spinner/Spinner";

const ItemSmallCart = ({ item, removeItem, addItem }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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

  function onAdd() {
    addItem(item.id, item.name, item.price, item.image, item.description);
  }

  return (
    <div>
      <Card
        sx={{
          width: "80%",
          marginTop: "15px",
          marginBottom: "35px",
          padding: "5px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            width={100}
            image={item.image}
            alt="item.img"
          />
          <CardContent>
            {item.name}
            <p>${item.price}</p>
            <p>cantidad: {item.quantify}</p>
          </CardContent>
        </CardActionArea>
        <div id="itemCount-smallCart">
          {isLoading ? (
            <div id="spinner-">
              <Spinner />
            </div>
          ) : (
            <ItemCount
              onAdd={onAdd}
              cartItem={item}
              stock={stockProduct()}
              removeItem={removeItem}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default ItemSmallCart;
