import ItemInCart from "../itemInCart/ItemInCart";

const ItemsListInCart = ({ items, removeItem}) => {
  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <ItemInCart key={item.id} data={item} removeItem={removeItem} />
          );
        })}
      </div>
     
    </>
  );
};

export default ItemsListInCart;
