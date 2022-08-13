import { Button, Label, Col, FormGroup, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
const ShoppingCartShippingForm = ({ setFormData, cancelInfo, goNext }) => {
  const handleSubmit = (object) => {
    setFormData(object);
    goNext();
  };
  return (
    <Container>
      <Formik
        initialValues={{
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
        }}
        onSubmit={handleSubmit}
      >
        <Form className="cart-form m-3 p-3">
          <h2>Shipping Information</h2>
          <p>*Not necessary if paying by PayPal</p>
          <FormGroup row>
            <Col className="px-3 text-left">
              <Label htmlFor="firstName" className="text-left">
                First Name
              </Label>
              <Field name="firstName" placeholder="First Name" className="w-100" />
            </Col>
            <Col className="px-3 text-left">
              <Label htmlFor="lastName" className="text-left">
                Last Name
              </Label>
              <Field name="lastName" placeholder="Last Name" className="w-100" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className=" text-left">
              <Label htmlFor="address" className="text-left">
                Address
              </Label>
              <Field name="address" type="text" placeholder="Adress" className="w-100" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="text-left">
              <Label htmlFor="address2" className="text-left">
                Address 2
              </Label>
              <Field name="address2" type="text" placeholder="Address" className="w-100" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="text-left px-3">
              <Label htmlFor="country" className="text-left">
                Country
              </Label>
              <Field name="country" type="text" placeholder="Country" className="w-100" />
            </Col>
            <Col className="text-left px-3">
              <Label htmlFor="city" className="text-left">
                City
              </Label>
              <Field name="city" type="text" placeholder="City" className="w-100" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="text-left px-3">
              <Label htmlFor="postalCode" className="text-left">
                Zip/Postal Code
              </Label>
              <Field name="postalCode" type="text" placeholder="Postal Code" className="w-100" />
            </Col>
            <Col className="text-left px-3">
              <Label htmlFor="phoeNum" className="text-left">
                Phone Number
              </Label>
              <Field name="phoneNum" type="text" placeholder="Phone Number" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className="text-left">
              <Label htmlFor="email" className="text-left">
                Email address
              </Label>
              <Field name="email" type="text" placeholder="Enter email" className="w-100" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label></Label>
            <Col className="text-left">
              <Button type="submit" color="primary">
                Next
              </Button>
              <Button type="submit" color="secondary" onClick={cancelInfo} className="mx-3">
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </Container>
  );
};
export default ShoppingCartShippingForm;
