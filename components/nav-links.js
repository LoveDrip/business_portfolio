import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinks = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-menu__list one-page-scroll-menu">
      <li>
        <Link href="/"  onClick={handleDropdownStatus}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Project
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Team
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </ScrollLink>
      </li>
      {/* <li className="dropdown">
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Blog
        </ScrollLink>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>Blog Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="search-btn search-opener">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
      </li> */}
    </ul>
  );
};

export default NavLinks;
