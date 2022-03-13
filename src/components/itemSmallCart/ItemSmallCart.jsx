import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ItemCount from "../itemCount/ItemCount";
import db from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CircularStatic from "../circularStatic/CircularStatic";
import { Link } from "react-router-dom";

const ItemSmallCart = ({ item, removeItem, addItem }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
        <Link to={`/item/${item.id}`}>
          <CardActionArea sx={{ color: "black" }}>
            <CardMedia
              component="img"
              width={100}
              image={item.image}
              alt="item.img"
            />

            <CardContent>
              <div id="name_itemSmallCart">{item.name.toUpperCase()}</div>
              <p>{item.price}</p>
              <p>cantidad: {item.quantify}</p>
            </CardContent>
          </CardActionArea>
        </Link>
        <div id="itemCount-smallCart">
          {isLoading ? (
            <div style={{ marginLeft: "55px", marginTop: "15px" }}>
              <CircularStatic />
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
