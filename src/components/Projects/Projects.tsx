import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      <Col
        sm={12}
        md={6}
        lg={4}
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="projects__item d-block">
          <div className="foto" onClick={() => showDetailsModal(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="auto"
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
      </Col>
    ));

  return (
    <section id="projects" className="projects">
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className="projects__heading">{headingText}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mx-auto">
            <Row className="mx-auto">{projects}</Row>
            {/* </Col> */}
            {deps && (
              <ProjectDetailsModal
                show={detailsModalShow}
                onHide={detailsModalClose}
                data={deps}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
