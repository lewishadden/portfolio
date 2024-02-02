import { useState } from "react";
import { Container, Row, Col, Stack, Card, Badge } from "react-bootstrap";
import { Icon } from "@iconify/react";

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
      <Col key={project.title} className="projects__item my-3 px-3">
        <Card
          text={project.theme.text}
          border={project.theme.border}
          bg={project.theme.background}
          className="projects__item__picture-card mx-auto"
          onClick={() => showDetailsModal(project)}
        >
          <Card.Body>
            <Stack gap={3} className="justify-content-between h-100">
              <Badge
                bg={"secondary"}
                text={project.theme.text}
                className="projects__item__picture-card__date ms-auto"
              >
                {project.startDate}
              </Badge>
              <Icon
                icon={project.thumbnail}
                className="projects__item__picture-card__thumbnail mx-auto"
              />

              <Card.Title
                as="h4"
                className="projects__item__picture-card__title font-trebuchet"
              >
                {project.title}
              </Card.Title>
            </Stack>
          </Card.Body>
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
        <Row
          xs={1}
          sm={1}
          md={2}
          lg={2}
          xl={3}
          className="projects__list center"
        >
          {projects}
        </Row>
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
