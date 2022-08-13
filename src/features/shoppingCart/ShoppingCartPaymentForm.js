import { PayPalButtons } from "@paypal/react-paypal-js";
import { Button, Container } from "reactstrap";
import { useSelector } from "react-redux";
import { subTotal } from "../../utils/cartFunctions";
const ShoppingCartPaymentForm = ({ cancelInfo, currentCart }) => {
  const currency = "USD";
  const style = { layout: "vertical" };

  const tax = useSelector((state) => state.shoppingCart.taxRate);
  const discount = useSelector((state) => state.shoppingCart.discount);
  const sub = subTotal(currentCart, discount);
  const total = (sub * (1 + tax)).toFixed(2);

  return (
    <Container className="cart-form m-3 p-3">
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[total, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: total,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            console.log(data);
          });
        }}
      />
      <Button type="submit" color="secondary" onClick={cancelInfo} className="btn-lg w-100">
        Cancel
      </Button>
    </Container>
  );
};

export default ShoppingCartPaymentForm;
