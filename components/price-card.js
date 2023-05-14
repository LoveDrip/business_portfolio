import React from "react";
const PriceCard = ({ data }) => {
  const { price, month, name, options, popular } = data;
  return (
    <div
      className={`pricing-one__single ${true === popular ? "popular" : null}`}
    >
      <div className="pricing-one__top">
        <h3>
          {price} <span>/{month}</span>
        </h3>
      </div>
      <div className="pricing-one__name">{name}</div>
      <ul className="list-unstyled pricing-one__list">
        {options.map(({ label }, index) => (
          <li key={`price-option-key-${index}`}>
            <i className="fa fa-check"></i> {label}
          </li>
        ))}
      </ul>
      <a href="#" className="thm-btn">
        Buy Now <i className="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  );
};

export default PriceCard;
