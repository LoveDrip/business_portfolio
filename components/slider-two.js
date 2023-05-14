import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import { Link as ScrollLink } from "react-scroll";
import bgImage1 from "@images/backgrounds/slider-bg-1-1.jpg";
import bgImage2 from "@images/backgrounds/slider-bg-1-2.jpg";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

const SliderTwo = () => {
  const carouselOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider main-slider__two">
      <Swiper className="thm-swiper__slider" {...carouselOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-center">
                <p>
                  <span></span>Brighter Financial
                </p>
                <h3>
                  Future For Your <span>Business</span>
                </h3>
              </div>

              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-center">
                <p>
                  <span></span>Brighter Financial
                </p>
                <h3>
                  Future For Your <span>Business</span>
                </h3>
              </div>

              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-center">
                <p>
                  <span></span>Brighter Financial
                </p>
                <h3>
                  Future For Your <span>Business</span>
                </h3>
              </div>

              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                More About Us <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default SliderTwo;
