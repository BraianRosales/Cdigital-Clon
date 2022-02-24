import ItemDetailContainer from "../../itemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailView = () => {
  let productId = useParams().id;

  return (
    <div>
      <ItemDetailContainer id={productId} />
    </div>
  );
};

export default ItemDetailView;
