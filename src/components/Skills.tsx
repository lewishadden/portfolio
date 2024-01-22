const Skills = ({ skills, basicInfo }) => {
  var headingText = basicInfo?.sectionName?.skills;

  var skillTiles = skills?.icons?.map((skill, i) => (
    <li className="list-inline-item mx-3" key={i}>
      <span>
        <div className="text-center skills-tile">
          <i className={skill.class} style={{ fontSize: "220%" }}>
            <p
              className="text-center"
              style={{ fontSize: "30%", marginTop: "4px" }}
            >
              {skill.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  ));

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{headingText}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skillTiles}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
