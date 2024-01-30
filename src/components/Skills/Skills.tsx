import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";

import "./Skills.scss";

const Skills = ({ skills, basicInfo }) => {
  const headingText = basicInfo.sectionName.skills;

  const skillTiles = skills?.icons?.map((skill, i) => (
    <li className="list-inline-item mx-3 skills__list__tile" key={i}>
      <Icon icon={skill.class} className="skills__list__tile__icon" />
      <p className="skills__list__tile__name">{skill.name}</p>
    </li>
  ));

  return (
    <section id="skills" className="skills">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="skills__title">{headingText}</h2>
            <Col md={12}>
              <ul className="list-inline mx-auto skills__list">{skillTiles}</ul>
            </Col>
          </Col>
          §
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
