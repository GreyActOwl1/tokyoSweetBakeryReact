import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectTaxRate } from "./shoppingCartSlice";
import { Col, Card, CardBody, Table, Collapse, Button } from "reactstrap";
import { getDiscount } from "./shoppingCartSlice";

const ShoppingCartSummary = ({ cart }) => {
  const tax = useSelector(selectTaxRate);
  const discount = useSelector((state) => state.shoppingCart.discount);
  const dispatch = useDispatch();
  const subTotal =
    cart.reduce((acc, cur) => {
      return acc + cur.count * Number(cur.price.slice(1));
    }, 0) *
    (1 - discount);

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
    <Col>
      <Card>
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
                <td>${subTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <th className="table-head" scope="row">
                  Taxes:{" "}
                </th>
                <td>${(subTotal * tax).toFixed(2)}</td>
              </tr>
              <tr>
                <th className="table-head" scope="row">
                  Total:{" "}
                </th>
                <td>${(subTotal * (1 + tax)).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShoppingCartSummary;
