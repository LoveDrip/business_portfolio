import React from "react";
import bgImage from "@images/backgrounds/slider-bg-1-2.jpg";
const PageHeader = ({ title }) => {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container text-center">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
