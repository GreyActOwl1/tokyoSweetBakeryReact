import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "reactstrap";
import { selectShoppingCart, deleteAll } from "../features/shoppingCart/shoppingCartSlice";
import ShoppingCartSubHeader from "../features/shoppingCart/ShoppingCartSubHeader";
import ShoppingCartSummary from "../features/shoppingCart/ShoppingCartSummary";
import ShoppingCartItemList from "../features/shoppingCart/ShoppingCartItemList";
import ShoppingCartShippingForm from "../features/shoppingCart/ShoppingCartShippingForm";
import ShoppingCartPaymentForm from "../features/shoppingCart/ShoppingCartPaymentForm";
const CartPage = () => {
  const defaultForm = {
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
    phoneNum: "",
  };

  const dispatch = useDispatch();

  const currentCart = useSelector(selectShoppingCart);

  const [activeForm, setActiveForm] = useState(1);

  const [formData, setFormData] = useState(defaultForm);

  const goNext = () => {
    setActiveForm(activeForm < 3 ? activeForm + 1 : 3);
  };
  const cancelInfo = () => {
    setActiveForm(1);
    setFormData(defaultForm);
  };

  const clearShopping = () => {
    dispatch(deleteAll());
  };
  return (
    <div>
      <Row>
        <ShoppingCartSubHeader activeForm={activeForm} setActiveForm={setActiveForm} />
      </Row>
      <Row>
        <Col className="col-12 col-md-4 order-md-2">
          <ShoppingCartSummary cart={currentCart} />
        </Col>
        <Col className="col-12 col-md-8 order-md-1">
          {activeForm === 1 && <ShoppingCartItemList cart={currentCart} clearShopping={clearShopping} goNext={goNext} />}
          {activeForm === 2 && <ShoppingCartShippingForm setFormData={setFormData} goNext={goNext} cancelInfo={cancelInfo} />}
          {activeForm === 3 && <ShoppingCartPaymentForm cancelInfo={cancelInfo} currentCart={currentCart} />}
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
