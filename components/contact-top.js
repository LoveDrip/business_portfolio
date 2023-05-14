import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/backgrounds/contact-bg-1-1.jpg";
const ContactTop = () => {
  return (
    <div
      className="contact-one__top"
      id="contact"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row className="justify-content-start justify-content-md-start justify-content-lg-end">
          <Col md={12} lg={7}>
            <div className="block-title">
              <p>
                <span></span>Get in Touch
              </p>
              <h3>Contact Us Today and Get a</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactTop;
