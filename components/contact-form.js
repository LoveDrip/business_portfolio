import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personImage from "@images/resources/contact-person-1-1.png";

const ContactForm = () => {
  return (
    <section className="contact-one">
      <Container>
        <div className="inner-container">
          <Row className="align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-5 text-center text-md-center text-lg-center text-xl-left">
              <img
                src={personImage}
                className="contact-one__person img-fluid wow fadeInLeft"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <form action="mailto:williamjhon1211424@gmail.com" className="contact-one__form">
                <h3>Free Online Quote Now!</h3>
                <Row>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" name="name" />
                      <i className="far fa-user"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Email ID" name="email" />
                      <i className="far fa-envelope-open"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Phone No." name="phone" />
                      <i className="far fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" name="subject" />
                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                      <i className="far fa-comment"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <button type="submit" className="thm-btn">
                      Send Message
                      <i className="fa fa-arrow-circle-right"></i>
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
