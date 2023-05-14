import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import PriceCard from "@components/price-card";
import { PRICE_DATA } from "@data/index";

const Price = () => {
  const carouselOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: { delay: 5000 },
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
    <section className="pricing-one">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>Best Pricing
          </p>
          <h3>
            Our Pricing Plans Company that <br />
            can <span>Product Employ</span>
          </h3>
        </div>
        <Swiper {...carouselOptions}>
          {PRICE_DATA.map((price, index) => (
            <SwiperSlide key={`price-card-key-${index}`}>
              <PriceCard data={price} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Price;
