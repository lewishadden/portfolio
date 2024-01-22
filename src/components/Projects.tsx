import { useState } from "react";

import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ projects, basicInfo }) => {
  const [deps, setDeps] = useState(null);
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  var headingText = basicInfo?.sectionName?.projects;

  const showDetailsModal = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  let detailsModalClose = () => {
    setDetailsModalShow(false);
    setDeps(null);
  };

  var projects =
    projects?.length > 0 &&
    projects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => showDetailsModal(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{headingText}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        {deps && (
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalClose}
            data={deps}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
