import { Container, Row, Col, Button } from "reactstrap";
import FeaturedProductDisplay from "../components/FeaturedProductDisplay";
import StoreParallaxHero from "../components/StoreParallaxHero";

const HomePage = () => {
  return (
    <Container className="p-0 mw-1600px mx-auto" fluid>
      <StoreParallaxHero />

      <Row className="my-5 mx-auto">
        <Col className="">
          <Button className="btn btn-secondary btn-lg">Shop Now </Button>
          <hr />
        </Col>
      </Row>
      <Row className="my-5 mx-auto">
        <h2 className="mt-5 mb-3 text-center"> Featured Documents</h2>
      </Row>
      <Row className="my-5 mx-auto">
        <Col>
          <FeaturedProductDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
