import React from "react";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import brand1 from "@images/brands/brand-1-1.png";
import brand2 from "@images/brands/brand-1-2.png";
import brand3 from "@images/brands/brand-1-3.png";
import brand4 from "@images/brands/brand-1-4.png";
import brand5 from "@images/brands/brand-1-5.png";

SwiperCore.use([Autoplay]);

const Brand = () => {
  const carouselOptions = {
    spaceBetween: 70,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 0,
        slidesPerView: 2
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 50,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 70,
        slidesPerView: 5
      }
    }
  };
  return (
    <section className="brand-one">
      <Container>
        <Swiper className="thm-swiper__slider" {...carouselOptions}>
          <SwiperSlide>
            <img src={brand1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Brand;
