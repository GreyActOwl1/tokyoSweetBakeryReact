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
        <Form>
          <h2>Shipping Information</h2>
          <p>*Not necessary if paying by PayPal</p>
          <FormGroup row>
            <Label htmlFor="firstName" className="text-left">
              First Name
            </Label>
            <Field name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>

            <Label htmlFor="lastName" className="text-left">
              Last Name
            </Label>
            <Field name="lastName" placeholder="Last Name" />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="address" className="text-left">
              Address
            </Label>
            <Field name="address" type="text" placeholder="Adress" />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="address2" className="text-left">
              Address 2
            </Label>
            <Field name="address2" type="text" placeholder="Adress" />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="country" className="text-left">
              Country
            </Label>
            <Field name="country" type="text" placeholder="Country" />
            <Label htmlFor="city" className="text-left">
              City
            </Label>
            <Field name="city" type="text" placeholder="City" />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="postalCode" className="text-left">
              Zip/Postal Code
            </Label>
            <Field name="postalCode" type="text" placeholder="Postal Code" />
            <Label htmlFor="phoeNum" className="text-left">
              Phone Number
            </Label>
            <Field name="phoneNum" type="text" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" className="text-left">
              Email address
            </Label>
            <Field name="email" type="text" placeholder="Enter email" />
          </FormGroup>

          <FormGroup row>
            <Label></Label>
            <Col>
              <Button type="submit" color="primary">
                Next
              </Button>
            </Col>
            <Col>
              <Button type="submit" color="secondary" onClick={cancelInfo}>
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
