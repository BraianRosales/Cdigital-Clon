import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../itemListContainer/ItemListContainer";
import Spinner from "../../spinner/Spinner";

const CategoriesView = ({ listTitle, searchText, stateSearchText }) => {
  let category = useParams().categoryId;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="layout">
          <Spinner />
        </div>
      ) : (
        <ItemListContainer
          category={category}
          listTitle={listTitle}
          searchText={searchText}
          stateSearchText={stateSearchText}
        />
      )}
    </div>
  );
};

export default CategoriesView;
