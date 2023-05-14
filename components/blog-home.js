import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "@components/blog-card";

import { BLOG_DATA } from "@data/index";
const BlogHome = () => {
  const carouselOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      375: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  };
  return (
    <section className="blog-one" id="blog">
      <Container>
        {/* <div className="block-title text-center">
          <p>
            <span></span>Why Choose Us
          </p>
          <h3>
            Our News and Articles Latest <br />
            <span>From Blog</span>
          </h3>
        </div>
        <Swiper {...carouselOptions}>
          {BLOG_DATA.map((blog, index) => (
            <SwiperSlide key={`blog-card-key-${index}`}>
              <BlogCard data={blog} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </Container>
    </section>
  );
};

export default BlogHome;
