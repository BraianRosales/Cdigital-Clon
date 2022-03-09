import ItemSmallCart from "../itemSmallCart/ItemSmallCart";

const ItemsListInCart = ({ items, removeItem, addItem}) => {
  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <ItemSmallCart key={item.id} item={item} removeItem={removeItem} addItem={addItem} />
          );
        })}
      </div>
     
    </>
  );
};

export default ItemsListInCart;
