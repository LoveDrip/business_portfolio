import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "@components/team-card";
import { TEAM_DATA } from "@data/index";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>Team Membar
          </p>
          <h3>
            Our business Consulting Company that <br /> can{" "}
            <span>Product Employ</span>
          </h3>
        </div>

        <div className="team-one__4-col">
          {TEAM_DATA.map((team, index) => (
            <TeamCard key={`team-card-key-${index}`} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
