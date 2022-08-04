import { Container, Row, Col } from "reactstrap";
import ImageGallery from "react-image-gallery";
import photoOne from "../app/assets/img/anna-shvets-5964505-pexels.jpg";
import photoTwo from "../app/assets/img/klaus-nielsen-6287295-pexels.jpg";
import photoThree from "../app/assets/img/dima-valkov-5665689-.pexels.jpg";
import Iframe from "react-iframe";

const AboutPage = () => {
  const images = [
    {
      original: photoOne,
    },
    {
      original: photoTwo,
    },
    {
      original: photoThree,
    },
  ];

  return (
    <Container fluid>
      <Row>
        <h2>Where to find us:</h2>{" "}
      </Row>
      <Row>
        <Col sm="6" className="order-last order-sm-first">
          <p>Hours:</p>
          <p>Sunday 10-6</p>
          <p>Monday 10-6</p>
          <p>Tuesday 10-6</p>
          <p>Wednesday 10-6</p>
          <p>Thursday 10-7</p>
          <p>Friday 10-7</p>
          <p>Saturday 10-7</p>
        </Col>
        <Col>
          <div className="google-maps embed-responsive-21by9">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.3669862958213!2d-81.33776922901438!3d37.30546758121114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884e381ddb8462e7%3A0xc17011e8836a752!2s505%20Moore%20St%2C%20Pocahontas%2C%20VA%2024635!5e0!3m2!1sen!2sus!4v1656653837798!5m2!1sen!2sus"
              width=""
              height=""
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p>505 Moore Street, Pocahontas, VA 24605, USA</p>
        </Col>
      </Row>
      <hr />
      <Row className="mb-5 mt-2">
        <Col md="8" className="mx-auto">
          {" "}
          <ImageGallery
            items={images}
            showPlayButton={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showBullets={true}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl suscipit adipiscing. Augue ut lectus arcu
          bibendum at varius vel pharetra vel. Integer eget aliquet nibh
          praesent tristique magna sit. Scelerisque varius morbi enim nunc
          faucibus a pellentesque sit amet. Adipiscing elit pellentesque
          habitant morbi tristique senectus et netus et. Consectetur adipiscing
          elit pellentesque habitant morbi tristique senectus. Egestas maecenas
          pharetra convallis posuere morbi. Eu augue ut lectus arcu bibendum at
          varius. Quis hendrerit dolor magna eget est. Et malesuada fames ac
          turpis egestas. Ipsum a arcu cursus vitae congue mauris rhoncus
          aenean. Pretium quam vulputate dignissim suspendisse in est ante.
          Ullamcorper malesuada proin libero nunc consequat interdum varius sit
          amet. Enim eu turpis egestas pretium aenean pharetra magna ac
          placerat.
        </p>

        <p>
          Euismod in pellentesque massa placerat duis ultricies lacus sed
          turpis. Nunc mi ipsum faucibus vitae aliquet nec. Tempor orci dapibus
          ultrices in iaculis. Quam id leo in vitae turpis massa sed. Massa
          sapien faucibus et molestie. Molestie at elementum eu facilisis sed
          odio morbi quis. Aliquam nulla facilisi cras fermentum odio eu feugiat
          pretium nibh. Quam id leo in vitae turpis massa sed elementum. Nulla
          pellentesque dignissim enim sit amet venenatis urna cursus eget. Morbi
          tincidunt ornare massa eget egestas. Venenatis tellus in metus
          vulputate. Amet cursus sit amet dictum sit amet justo donec. Facilisis
          leo vel fringilla est ullamcorper. Non odio euismod lacinia at quis
          risus. Sapien et ligula ullamcorper malesuada. Faucibus interdum
          posuere lorem ipsum dolor. Eu turpis egestas pretium aenean pharetra
          magna ac placerat vestibulum. Hendrerit gravida rutrum quisque non
          tellus. Auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam.
        </p>
      </Row>
    </Container>
  );
};

export default AboutPage;
