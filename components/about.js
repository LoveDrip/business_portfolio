import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import about1 from "@images/resources/about-1-1.png";
import about2 from "@images/resources/about-1-2.png";
const About = () => {
  return (
    <section className="about-one" id="about">
      <Container>
        <Row>
          <Col
            lg={6}
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <div className="about-one__images">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
              <div className="about-one__images-content text-center">
                <h3>234</h3>
                <p>Developed Games</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="block-title text-left">
                <p>
                  <span></span>About us
                </p>
                <h3>
                  Your Partner for <br /> <span>Game Innovation</span>
                </h3>
              </div>

              <p>
              We always strive to make a game that sweeps the earth like COVID-19.
              </p>
              <div className="about-one__box">
                <i className="besit-icon-medal"></i>
                <div className="about-one__box-content">
                  <h3>Business Solutions​</h3>
                  <p>
                  Leading With Transparency Promotes Customer Loyalty.
                  </p>
                </div>
              </div>
              <div className="about-one__box">
                <i className="besit-icon-clock1"></i>
                <div className="about-one__box-content">
                  <h3>24/7 Support</h3>
                  <p>
                  You can contact us any time you want and get what you want.
                  </p>
                </div>
              </div>

              <div className="about-one__call">
                <ScrollLink
                  activeClass="current"
                  className="thm-btn"
                  role="button"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Get In Touch <i className="fa fa-arrow-circle-right"></i>{" "}
                </ScrollLink>

                <div className="about-one__call-box">
                  <i className="besit-icon-phone"></i>
                  <p>
                    Call anytime <br />{" "}
                    <a href="tel:1-856-432-4441">+1-856-432-4441</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
