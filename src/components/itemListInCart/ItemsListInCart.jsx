import ItemInCart from "../itemInCart/ItemInCart";

const ItemsListInCart = ({ items, removeItem}) => {
  return (
    <>
    <h3 style={{ textAlign: "center" }}>CARRITO</h3>
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
