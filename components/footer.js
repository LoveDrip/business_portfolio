import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "@images/logo-light.png";
import footerGallery1 from "@images/resources/footer-g-1-1.jpg";
import footerGallery2 from "@images/resources/footer-g-1-2.jpg";
import footerGallery3 from "@images/resources/footer-g-1-3.jpg";
import footerGallery4 from "@images/resources/footer-g-1-4.jpg";
import footerGallery5 from "@images/resources/footer-g-1-5.jpg";
import footerGallery6 from "@images/resources/footer-g-1-6.jpg";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="upper-footer">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className="footer-widget footer-widget__about">
                <a href="/">
                  <img src={logoLight} alt="" />
                </a>
                <p>
                  Growing Your Business
                  Is Our Calling
                </p>

                <hr />
                <div className="footer-widget__social">
                  <a href="https://t.me/YY4251211" className="fab fa-telegram"></a>
                  <a href="#" className="fab fa-discord"></a>
                  <a href="#" className="fab fa-skype"></a>
                  <a href="#" className="fab fa-linkedin-in"></a>
                </div>
              </div>
            </Col>

            {/* <Col sm={12} md={6} lg={6} xl={2}>
              <div className="footer-widget footer-widget__links-widget">
                <h3 className="footer-widget__title">Useful Links</h3>

                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">Our News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </Col> */}

            <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget footer-widget__contact">
                <h3 className="footer-widget__title">Contact Us</h3>

                <p>Shibuya City
                Tokyo, Japan</p>
                <ul className="footer-widget__contact-list list-unstyled">
                  <li>
                    <a href="mailto:williamjhon1211424@gmail.com">
                      <i className="themify-icon-email"></i>
                      williamjhon1211424@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="whatsapp:1 856 432 4441">
                      <i className="themify-icon-headphone-alt"></i> +1 856 432 4441
                    </a>
                  </li>
                 
                </ul>
              </div>
            </Col>

            {/* <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget">
                <h3 className="footer-widget__title">Instagrame Follow</h3>

                <ul className="list-unstyled footer-widget__gallery">
                  <li>
                    <a href="#">
                      <img src={footerGallery1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery2} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery3} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery4} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery5} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery6} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div className="bottom-footer">
        <Container>
          <div className="inner-container">
            <p>Copyright {new Date().getFullYear()} All Right Reserved</p>
            {/* <ul className="list-unstyled footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul> */}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
