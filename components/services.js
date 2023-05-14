import React from "react";
import ServiceCard from "@components/service-card";
import { SERVICE_DATA } from "@data/index";

const Services = () => {
  return (
    <section className="service-one" id="services">
      <div className="container">
        <div className="block-title text-center">
          <p>
            <span></span>Why Choose Us
          </p>
          <h3>
          We have a unique 99% client retention rate <br />{" "}
            <span>I am ready to scale up your business with my great service.</span>
          </h3>
        </div>
        <div className="service-one__3-col">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard data={service} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
