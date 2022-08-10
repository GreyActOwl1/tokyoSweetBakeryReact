import { PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "reactstrap";
const ShoppingCartPaymentForm = ({ cancelInfo, formData }) => {
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  return (
    <div>
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
      <Button type="submit" color="secondary" onClick={cancelInfo}>
        Cancel
      </Button>
    </div>
  );
};

export default ShoppingCartPaymentForm;
