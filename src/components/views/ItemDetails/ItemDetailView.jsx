import ItemDetailContainer from "../../itemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailView = () => {
  let productId = useParams().id;
  productId = Number(productId);

  return (
    <div>
      <ItemDetailContainer id={productId} />
    </div>
  );
};

export default ItemDetailView;
