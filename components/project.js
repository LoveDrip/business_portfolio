import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@components/project-card";
import { PROJECT_DATA } from "@data/index";
const Project = () => {
  const carouselOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
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
        spaceBetween: 0,
        slidesPerView: 1
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 1
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 1
      }
    }
  };
  return (
    <section className="project-one" id="project">
      <Container>
        <div className="project-one__top">
          <Row>
            <Col md={12} lg={6}>
              <div className="block-title text-left">
                <p>
                  <span></span>Best Portfolio
                </p>
                <h3>Completed Projects</h3>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <p className="project-one__top-text">
                Aliquam sodales justo sit amet urna auctor scelerisquinterdum
                leo anet temp enim esent egetis hendrerit vel nibh vitae ornar
                sem velit aliquam facilisivitae finibus risus feslin is
                hendrerit vel nibh vitae ornar uspendisse
              </p>
            </Col>
          </Row>
        </div>
        <Swiper className="thm-swiper__slider" {...carouselOptions}>
          {PROJECT_DATA.map((project, index) => (
            <SwiperSlide key={`project-key-${index}`}>
              <ProjectCard data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Project;
