import { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

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
        xs={"auto"}
        key={project.title}
        style={{ cursor: "pointer" }}
        className="projects__item"
      >
        <Card
          text="white"
          border="secondary"
          bg="dark"
          className="projects__item__picture-card"
          onClick={() => showDetailsModal(project)}
        >
          <Card.Img
            variant="top"
            className="projects__item__picture-card__image"
            src={project.images[0]}
          />
          <Card.Body>
            <Card.Title as="h4" className="projects__item__picture-card__title">
              {project.title}
            </Card.Title>
          </Card.Body>

          <Card.ImgOverlay className="projects__item__picture-card__overlay">
            <Badge bg="dark" className="projects__item__picture-card__date">
              {project.startDate}
            </Badge>
          </Card.ImgOverlay>
        </Card>
      </Col>
    ));

  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="projects__heading">{headingText}</h2>
          </Col>
        </Row>
        <Row className="projects__list">{projects}</Row>
        {deps && (
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalClose}
            data={deps}
          />
        )}
      </Container>
    </section>
  );
};

export default Projects;
