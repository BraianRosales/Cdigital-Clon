import ItemDetailContainer from "../../itemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailView = ({ searchText, listTitle, stateSearchText }) => {
  let productId = useParams().id;

  return (
    <div className="height-view">
      <ItemDetailContainer
        id={productId}
        searchText={searchText}
        listTitle={listTitle}
        stateSearchText={stateSearchText}
      />
    </div>
  );
};

export default ItemDetailView;
