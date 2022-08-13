import { Row, Col } from "reactstrap";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bakedGoodsDisplay from "../app/assets/img/yeh-xintong-unsplash-hero.jpg";
import { useRef } from "react";

const StoreParallaxHero = () => {
  const ref = useRef();
  return (
    <Row className="parallax-background  mw-100 mx-auto d-flex justify-content-center">
      <Col xs="12" md="10" class="d-flex justify-content-center">
        <div className="parallax-container mx-auto d-flex justify-content-center">
          <Parallax pages={3} ref={ref}>
            <ParallaxLayer offset={1} speed={-1}>
              <h1 class="parallax">Tokyo Sweets Bakery</h1>
            </ParallaxLayer>
          </Parallax>

          <img
            src={bakedGoodsDisplay}
            alt="baked goods display"
            class="parallax parallax-img-background"
          />
        </div>
      </Col>
    </Row>
  );
};
export default StoreParallaxHero;
