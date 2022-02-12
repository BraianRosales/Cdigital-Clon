import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../components-jsx/ItemListContainer";

const Categories = ({ greeting }) => {
  let category = useParams().categoryId;

  return (
    <div>
      <ItemListContainer category={category} greeting={greeting} />
    </div>
  );
};

export default Categories;
