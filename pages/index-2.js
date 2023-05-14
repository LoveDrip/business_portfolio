import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import SliderTwo from "@components/slider-two";
import About from "@components/about";
import Services from "@components/services";
import Project from "@components/project";
import ProgressSection from "@components/progress-section";
import Team from "@components/team";
import Price from "@components/price";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/contact-form";
import BlogHome from "@components/blog-home";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";
const IndexTwo = () => {
  return (
    <Layout pageTitle="Besit React || Corporate One page React Template">
      <HeaderTwo />
      <MobileNav />
      <SliderTwo />
      <About />
      <Services />
      <Project />
      <ProgressSection />
      <Team />
      <ContactTop />
      <ContactForm />
      <Price />
      <BlogHome />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexTwo;
