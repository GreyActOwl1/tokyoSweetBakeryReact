import ShoppingCartItem from "./ShoppingCartItem";
import { Col } from "reactstrap";
const ShoppingCartItemList = ({ cart }) => {
  return (
    <Col className="my-3">
      {cart.length === 0 && <>Your Cart is Empty</>}
      {cart.length > 0 && cart.map((item, i) => <ShoppingCartItem cartItem={item} isEven={!(i % 2)} key={i} />)}
    </Col>
  );
};

export default ShoppingCartItemList;
