import ItemInCart from "./ItemInCart";

const ItemsListInCart = ({ items, removeItem, clear }) => {
  return (
    <div>
      {items.map((item) => {
        return <ItemInCart key={item.id} data={item} removeItem={removeItem} />;
      })}
      <button onClick={() => clear()}>Vaciar carrito</button>
    </div>
  );
};

export default ItemsListInCart;
