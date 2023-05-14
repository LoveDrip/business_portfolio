import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";

import AppleTouch from "@images/favicons/apple-touch-icon.png";
import Fevicon32 from "@images/favicons/favicon-32x32.png";
import Fevicon16 from "@images/favicons/favicon-16x16.png";

const Layout = ({ pageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    searchToggler();
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      searchToggler();
      window.removeEventListener("scroll", handleScrollTop);
    };
  });

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  const searchToggler = () => {
    // search toggler
    let searchOpner = document.querySelectorAll(".search-opener");
    searchOpner.forEach((searchOpnerBtn) => {
      searchOpnerBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.add("active");
        e.preventDefault();
      });
    });
    let searchCloser = document.querySelectorAll(".search-closer");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}

      <div className="search-popup">
        <div className="search-popup__overlay search-closer"></div>
        <div className="search-popup__content">
          <form action="#">
            <input type="text" placeholder="Search Here..." />
            <button type="submit" className="thm-btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Layout;
