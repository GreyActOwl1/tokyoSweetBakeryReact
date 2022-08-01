import { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { selectShoppingCart } from "../features/shoppingCart/shoppingCartSlice";
import ShoppingCartSubHeader from "../features/shoppingCart/ShoppingCartSubHeader";
import ShoppingCartSummary from "../features/shoppingCart/ShoppingCartSummary";
import ShoppingCartItemList from "../features/shoppingCart/ShoppingCartItemList";
import ShoppingCartShippingForm from "../features/shoppingCart/ShoppingCartShippingForm";
import ShoppingCartPaymentForm from "../features/shoppingCart/ShoppingCartPaymentForm";
const CartPage = () => {
  const currentCart = useSelector(selectShoppingCart);

  const [activeForm, setActiveForm] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    country: "",
    city: "",
    postalCode: "",
    email: "",
    creditCard: "",
    expDate: "",
    cvv: "",
    total: "",
  });
  return (
    <div>
      <Row>
        <ShoppingCartSubHeader activeForm={activeForm} setActiveForm={setActiveForm} />
      </Row>
      <Row>
        <Col>
          <ShoppingCartSummary />
          {activeForm === 1 && <ShoppingCartItemList cart={currentCart} />}
          {activeForm === 2 && <div>form 2</div>}
          {activeForm === 3 && <div>form 3</div>}
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
