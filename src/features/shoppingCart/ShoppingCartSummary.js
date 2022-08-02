import { useSelector } from "react-redux";
import { useState } from "react";
import { Col, Card, CardBody, Table } from "reactstrap";
const ShoppingCartSummary = ({ cart }) => {
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
                <th scope="row">Coupon Code: </th>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Subtotal: </th>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Taxes: </th>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Total: </th>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShoppingCartSummary;
