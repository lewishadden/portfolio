import { Icon } from "@iconify/react";

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
      <div className="col-md-12">
        <h2 className="skills__title">{headingText}</h2>
        <div className="col-md-12">
          <ul className="list-inline mx-auto skills__list">{skillTiles}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
