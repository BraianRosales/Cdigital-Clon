import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { db } from "./../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import Spinner from "./../spinner/Spinner";

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs[0]);
      setIsLoading(false);
    };
    getItem();
  }, [id]);

  return (
    <div id="itemDetail">
      {isLoading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
};
export default ItemDetailContainer;
