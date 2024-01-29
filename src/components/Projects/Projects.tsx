import { useState } from "react";

import ProjectDetailsModal from "./ProjectDetailsModal/ProjectDetailsModal";

import "./Projects.scss";

const Projects = ({ projects, basicInfo }) => {
  const [deps, setDeps] = useState(null);
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  var headingText = basicInfo.sectionName.projects;

  const showDetailsModal = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  let detailsModalClose = () => {
    setDetailsModalShow(false);
    setDeps(null);
  };

  var projects =
    projects.length > 0 &&
    projects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="projects__item d-block">
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
              <span className="projects__item__date">{project.startDate}</span>
              <br />
              <p className="projects__item__title mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));

  return (
    <section id="projects" className="projects">
      <div className="col-md-12">
        <h2 className="projects__heading">{headingText}</h2>
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
