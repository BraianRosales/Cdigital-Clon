import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../itemListContainer/ItemListContainer";

const CategoriesView = ({ searchText, stateSearchText }) => {
  let category = useParams().categoryId;

  return (
    <div className="height-view">
      <ItemListContainer
        category={category}
        searchText={searchText}
        stateSearchText={stateSearchText}
      />
    </div>
  );
};

export default CategoriesView;
