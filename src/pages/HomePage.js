import { Container, Row, Col, Button } from "reactstrap";
import FeaturedProductDisplay from "../components/FeaturedProductDisplay";
import bakedGoodsDisplay from "../app/assets/img/yeh-xintong-unsplash-hero.jpg";

const HomePage = () => {
  return (
    <Container fluid>
      <Row className="parallax-background d-flex justify-content-center">
        <Col xs="12" md="10" class="d-flex justify-content-center">
          <div className="parallax-container mx-auto d-flex justify-content-center">
            <h1 class="parallax">Tokyo Sweets Bakery</h1>
            <img
              src={bakedGoodsDisplay}
              alt="baked goods display"
              class="parallax parallax-img-background"
            />
          </div>
        </Col>
      </Row>

      <Row className="my-5 mx-0">
        <Col className="">
          <Button className="btn btn-secondary btn-lg">Shop Now </Button>
          <hr/>
        </Col>
      </Row>

      <Row>
        <Col>
          <FeaturedProductDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
