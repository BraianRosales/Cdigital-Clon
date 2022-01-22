import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="wrap" id="catalogs">
      {props.greeting}
    </div>
  );
};

export default ItemListContainer;
