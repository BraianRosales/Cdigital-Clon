const ItemCount = ({ onAdd, cartItem, stock, removeItem}) => {
  return (
    <div id="item-count">
      <div
        id="btn-itemCount-subtract"
        onClick={() => {
          removeItem(cartItem.id)
        }}
      ></div>
      <div id="box-initial">{cartItem.quantify}</div>
      <div
        id="btn-itemCount-add"
        onClick={() => {
          if (stock > cartItem.quantify) {
            onAdd();
          }
        }}
      ></div>
    </div>
  );
};

export default ItemCount;
