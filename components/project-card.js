import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
const ProjectCard = ({ data }) => {
  const { title, text, image } = data;
  return (
    <SimpleReactLightbox>
      <div className="project-one__single">
        <img src={image} alt={title} />
        <SRLWrapper>
          <div className="project-one__content">
            <p>{text}</p>
            <h3>{title}</h3>
            <a
              href={image}
              className="img-popup project-one__link"
              data-attribute="SRL"
              aria-label="open image"
            >
              <img src={image} className="img-fluid sr-only" alt="" />
              <i className="far fa-angle-double-right"></i>
            </a>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
};

export default ProjectCard;
