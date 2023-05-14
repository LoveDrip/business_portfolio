import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import NavLinks from "@components/nav-links";
import logoDark from "@images/logo-dark.png";
const HeaderTwo = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <nav className="main-menu stricky main-menu__two">
        <Container>
          <div className="logo">
            <a href="/">
              <img src={logoDark} alt="" />
            </a>
            <span className="side-menu-toggler mobile-nav__toggler mobile-nav__opener">
              <i className="fa fa-bars"></i>
            </span>
          </div>

          <NavLinks />
          <div className="main-menu__two-btn-box">
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
              Free Consultant <i className="fa fa-arrow-circle-right"></i>
            </ScrollLink>
          </div>
        </Container>
      </nav>

      {/* stricky menu cloned */}
      <nav
        className={`main-menu stricky main-menu__two stricked-menu ${
          sticky === true ? "stricky-fixed" : null
        }  `}
      >
        <Container>
          <div className="logo">
            <a href="/">
              <img src={logoDark} alt="" />
            </a>
            <span className="side-menu-toggler mobile-nav__toggler">
              <i className="fa fa-bars"></i>
            </span>
          </div>

          <NavLinks />
          <div className="main-menu__two-btn-box">
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
              Free Consultant <i className="fa fa-arrow-circle-right"></i>
            </ScrollLink>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default HeaderTwo;
