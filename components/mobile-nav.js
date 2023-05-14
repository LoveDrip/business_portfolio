import React, { useEffect } from "react";
import Link from "next/link";
import NavLinks from "@components/nav-links";
import logoLight from "@images/logo-light.png";

const MobileNav = () => {
  useEffect(() => {
    navToggler();
    return () => {
      navToggler();
    };
  });
  const navToggler = () => {
    // nav toggler
    let navOpener = document.querySelectorAll(".mobile-nav__opener");
    navOpener.forEach((navOpenerBtn) => {
      navOpenerBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.add("expanded");
        e.preventDefault();
      });
    });
    let navCloser = document.querySelectorAll(".mobile-nav__closer");
    navCloser.forEach((navCloserBtn) => {
      navCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__closer"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__closer">
          <i className="far fa-times"></i>
        </span>
        <div className="logo-box">
          <Link href="/">
            <a>
              <img src={logoLight} alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
