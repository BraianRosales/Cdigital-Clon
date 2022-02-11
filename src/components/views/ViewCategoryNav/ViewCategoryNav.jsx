import React from "react";
import { useParams } from "react-router-dom";
import NavDetailContainer from "../../components-jsx/NavDetailContainer";

const ViewCategoryNav = () => {
  let category = useParams().categoryId;

  return (
    <div>
      <NavDetailContainer category={category} />
    </div>
  );
};

export default ViewCategoryNav;
