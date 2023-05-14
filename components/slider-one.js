import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import { Link as ScrollLink } from "react-scroll";
import bgImage1 from "@images/backgrounds/slider-bg-1-1.jpg";
import bgImage2 from "@images/backgrounds/slider-bg-1-2.jpg";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

const SliderOne = () => {
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
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...carouselOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Brighter Future
                </p>
                <h3>
                  <span>Game</span> for your future
                </h3>
              </div>

              <p>
                Succeed with your own game.
                An exciting future awaits you.
                We are happy to help you.
              </p>
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
              <div className="block-title text-left">
                <p>
                  <span></span>Brighter Financial
                </p>
                <h3>
                  <span>Idea</span> for your future
                </h3>
              </div>

              <p>
                If you choose our theam, there's no reason why you can't turn your dream of developing your awesome idea into a reality.
              </p>
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
              <div className="block-title text-left">
                <p>
                  <span></span>Brighter Financial
                </p>
                <h3>
                  <span>Business</span> for your future
                </h3>
              </div>

              <p>
                Video games often prove quite powerful in terms of connecting people.
                Make your business a success with your game.
              </p>
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

export default SliderOne;
