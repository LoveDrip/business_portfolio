import React from "react";

const ServiceCard = ({ data }) => {
  const { icon, title, text } = data;
  return (
    <div
      className="service-one__single wow fadeInUp"
      data-wow-duration="1500ms"
      data-wow-delay="100ms"
    >
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
