import React from "react";

const TeamCard = ({ data }) => {
  const { image, name, designation } = data;
  return (
    <div className="team-one__single">
      <div className="team-one__image">
        <div className="team-one__social">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fas fa-envelope"></a>
          <a href="#" className="fab fa-linkedin-in"></a>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className="team-one__content">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
