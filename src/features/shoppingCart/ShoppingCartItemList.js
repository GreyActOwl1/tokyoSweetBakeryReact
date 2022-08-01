import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCartItemList = ({ cart }) => {
  return (
    <>
      <ShoppingCartItem cartItem={cart[0]} />
    </>
  );
};

export default ShoppingCartItemList;
