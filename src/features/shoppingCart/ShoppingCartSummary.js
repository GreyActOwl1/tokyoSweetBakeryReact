import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectTaxRate } from "./shoppingCartSlice";
import { Col, Card, CardBody, Table, Collapse, Button } from "reactstrap";
import { getDiscount } from "./shoppingCartSlice";
import { subTotal } from "../../utils/cartFunctions";

const ShoppingCartSummary = ({ cart }) => {
  const tax = useSelector(selectTaxRate);
  const discount = useSelector((state) => state.shoppingCart.discount);
  const dispatch = useDispatch();
  const sub = subTotal(cart, discount);

  const [couponToggle, setCouponToggle] = useState(false);
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const handleDiscountSubmit = () => {
    dispatch(getDiscount(code));
    setCode("");
    setCouponToggle(false);
  };
  return (
    <Card className="my-3">
      <CardBody>
        <Table responsive className="text-left">
          <thead>
            <tr>
              <th className="shop-sum-header">Summary</th>
              <th className="shop-sum-header"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="table-head" scope="row">
                Coupon Code:{" "}
              </th>
              <td className="text-left">
                <Button
                  onClick={() => {
                    setCouponToggle(!couponToggle);
                  }}
                  style={{ marginBottom: "1rem" }}
                >
                  <i className="fa fa-caret-down"></i>
                </Button>
                <Collapse isOpen={couponToggle}>
                  <input type="text" value={code} onChange={handleChange} />
                  <Button color="primary" className="mx-3" onClick={handleDiscountSubmit}>
                    Submit
                  </Button>
                </Collapse>
              </td>
            </tr>
            <tr>
              <th className="table-head" scope="row">
                Subtotal:{" "}
              </th>
              <td>${sub.toFixed(2)}</td>
            </tr>
            <tr>
              <th className="table-head" scope="row">
                Taxes:{" "}
              </th>
              <td>${(sub * tax).toFixed(2)}</td>
            </tr>
            <tr>
              <th className="table-head" scope="row">
                Total:{" "}
              </th>
              <td>${(sub * (1 + tax)).toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ShoppingCartSummary;
