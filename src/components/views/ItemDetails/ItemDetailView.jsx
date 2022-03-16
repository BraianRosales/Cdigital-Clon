import ItemDetailContainer from "../../itemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailView = ({ searchText, stateSearchText }) => {
  let productId = useParams().id;

  return (
    <div className="height-view">
      <ItemDetailContainer
        id={productId}
        searchText={searchText}
        stateSearchText={stateSearchText}
      />
    </div>
  );
};

export default ItemDetailView;
