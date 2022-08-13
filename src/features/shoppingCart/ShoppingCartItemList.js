import ShoppingCartItem from "./ShoppingCartItem";
import { Col, Row, Button, Container } from "reactstrap";
const ShoppingCartItemList = ({ cart, goNext, clearShopping }) => {
  return (
    <Col className="my-3 ">
      <Container className="cart-item-list p-4">
        {cart.length === 0 && <>Your Cart is Empty</>}
        {cart.length > 0 && cart.map((item, i) => <ShoppingCartItem cartItem={item} isEven={!(i % 2)} key={i} />)}
        <div className="d-flex mx-2">
          <Button type="submit" color="primary" onClick={goNext}>
            Next
          </Button>
          <Button type="submit" color="secondary" onClick={clearShopping} className="mx-3">
            Clear Cart
          </Button>
        </div>
      </Container>
    </Col>
  );
};

export default ShoppingCartItemList;
