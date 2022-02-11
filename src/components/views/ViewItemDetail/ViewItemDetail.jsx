import ItemDetailContainer from "../../components-jsx/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ViewItemDetail = () => {
  let productId = useParams().id;
  productId = Number(productId);

  return (
    <div>
      <ItemDetailContainer id={productId} />
    </div>
  );
};

export default ViewItemDetail;
