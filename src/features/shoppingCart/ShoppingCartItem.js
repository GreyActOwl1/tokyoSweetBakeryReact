import { Media, Form, FormGroup, Button, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { modifyCount, deleteItem } from "./shoppingCartSlice";

const ShoppingCartItem = ({ cartItem, isEven }) => {
  const dispatch = useDispatch();
  return (
    <Media style={{ backgroundColor: isEven ? "rgba(0,0,0,0)" : "rgba(0,0,0,.25)" }} className="p-2">
      <Media left>
        <Media
          object
          src={`${cartItem.img}`}
          alt={cartItem.name}
          style={{ height: "150px", width: "200px", objectFit: "cover" }}
          className="img-thumbnail me-3"
        />
      </Media>
      <Media body>
        <Media className="text-left" heading>
          {cartItem.name}
        </Media>
        <Media>{cartItem.description}</Media>
        <Media className="mt-3">
          <Form className="me-3 ">
            <FormGroup className="d-flex ">
              <Button color="danger" onClick={() => dispatch(deleteItem(cartItem.name))}>
                <i className="fa fa-trash"></i>
              </Button>
              <Input
                className="mx-3"
                type="select"
                name="count"
                value={cartItem.count}
                id="countSelect"
                onChange={(e) => {
                  console.log({ itemName: cartItem.name, count: e.target.value });
                  dispatch(modifyCount({ itemName: cartItem.name, count: e.target.value }));
                }}
              >
                {[...Array(30)].map((x, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </Input>
            </FormGroup>
          </Form>
          <p className="mt-2">{cartItem.price}</p>
        </Media>
      </Media>
    </Media>
  );
};

export default ShoppingCartItem;
