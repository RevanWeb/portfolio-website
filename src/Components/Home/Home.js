import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import me from "../../Assets/me.jpeg";
function Home() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <div className="social-icons-block">
                <ul>
                  <li>
                    <a href="">Linkedin</a>
                  </li>
                  <li>
                    <a href="">Git</a>
                  </li>
                  <li>
                    <a href="">Tweeter</a>
                  </li>
                  <li>
                    <a href="">Insta</a>
                  </li>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <h4>Revan Sagare</h4> */}
              <h1>
                Revan Sagare <br />
                Frontend Developer
                <br />
                Based in India
              </h1>
            </Col>
          </Row>
          <Row children="align-item-center">
            <Col md={4}>
              <div className="each-hero-part">
                <span>Biography</span>
                <h5>
                  I am a front end developer with industry experience building
                  websites and web applications. I specialize in HTML5, CSS3,
                  javascript, jQuery, Saas, Bootstrap, Ajax, Json, Git,
                  Responsive web development, SEO and have basic experience
                  working with React.
                </h5>
              </div>
              <div className="each-hero-part">
                <span>Year Of Experiance</span>
                <h2>7.5</h2>
              </div>
              <div className="each-hero-part">
                <span>Services</span>
                <h5>Web Developement</h5>
                <h5>Mobile app development</h5>
                <h5>responsive design</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="hero-img-block">
                <img className="img-fluid" src={me} alt="Hero-image" />
              </div>
            </Col>
            <Col md={4}>
              <div className="each-hero-part-beta">
                <span>Conatct</span>
                <h5>
                  Feel free to contact me directly at revansagare@gmail.com. OR
                  you can DM on Linkedin as well.
                </h5>
              </div>
              <div className="each-hero-part-beta">
                <span>Projects Done</span>
                <h2>100+ </h2>
                <h5>Website's and Web App</h5>
                <h5>Mobile App's Layout</h5>
              </div>
              <div className="each-hero-part-beta">
                <span>Working At</span>
                <h5>Cmots Infotech</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;
