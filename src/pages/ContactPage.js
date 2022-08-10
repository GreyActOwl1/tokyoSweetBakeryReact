import { Container, Row, Col, FormGroup, Label, Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
// form validate utility

const ContactPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };

  return (
    <Container fluid>
      <Row className="text-start row-content pl-md-5 pt-4">
        <Row>
          <Col>
            <h2>Send us a Message</h2>
            <p>
              Have a suggestion? Can't find what your looking for? Just want to
              say hi? Let us know below.
            </p>
            <hr />
          </Col>
        </Row>

        <Col md="10" className="mt-1">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              areaCode: "",
              telNum: "",
              email: "",
              message: "",
            }}
            onSubmit={handleSubmit}
            // validate={validateContactForm}
          >
            <Form>
              <FormGroup row>
                <Label htmlFor="firstName" md="2">
                  First Name
                </Label>
                <Col md="10">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                  <ErrorMessage name="firstName">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md="2">
                  Last Name
                </Label>
                <Col md="10">
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  />
                  <ErrorMessage name="lastName">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="areaCode" md="2">
                  Phone
                </Label>
                <Col xs="5" md="3">
                  <Field
                    type="tel"
                    name="areaCode"
                    placeholder="Area Code"
                    className="form-control"
                  />
                  <ErrorMessage name="areaCode">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
                <Col xs="7">
                  <Field
                    type="tel"
                    name="telNum"
                    placeholder="Tel. number"
                    className="form-control"
                  />
                  <ErrorMessage name="phoneNum">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md="2">
                  Email*
                </Label>
                <Col md="10">
                  <Field
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />{" "}
                  <ErrorMessage name="email">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="feedback" md="2">
                  Your Message*
                </Label>
                <Col md="10">
                  <Field
                    name="feedback"
                    as="textarea"
                    rows="8"
                    className="form-control"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Message
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
