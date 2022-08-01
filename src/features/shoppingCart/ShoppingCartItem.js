const ShoppingCartItem = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <>
      <img src={cartItem.img} alt={cartItem.name}></img>
    </>
  );
};

export default ShoppingCartItem;
