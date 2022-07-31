import { useState } from "react";
import { Row, Col } from "reactstrap";
import ShoppingCartSubHeader from "../features/shoppingCart/ShoppingCartSubHeader";
import ShoppingCartSummary from "../features/shoppingCart/ShoppingCartSummary";
import ShoppingCartItemList from "../features/shoppingCart/ShoppingCartItemList";
import ShoppingCartShippingForm from "../features/shoppingCart/ShoppingCartShippingForm";
import ShoppingCartPaymentForm from "../features/shoppingCart/ShoppingCartPaymentForm";
const CartPage = () => {
  const [activeForm, setActiveForm] = useState(1);
  return (
    <div>
      <Row>
        <ShoppingCartSubHeader />
      </Row>
      <Row>
        <ShoppingCartSummary />
      </Row>
    </div>
  );
};

export default CartPage;
