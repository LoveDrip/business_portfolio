import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailIcon from "@images/icons/email-icon-1-1.png";
const Subscribe = () => {
  return (
    <section className="subscribe-box">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={12} lg={6}>
            <div className="subscribe-box__content">
              <img src={emailIcon} alt="" />
              <h3>Subscribe for Newsletter</h3>
              <p>Grow Your Business with Our SEO Agency</p>
            </div>
          </Col>

          <Col sm={12} md={12} lg={6}>
            <form action="#" className="subscribe-box__form">
              <input type="text" placeholder="Enter Your Email" name="email" />
              <button type="submit" className="thm-btn">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
