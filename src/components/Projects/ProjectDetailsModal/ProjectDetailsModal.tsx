import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./ProjectDetailsModal.scss";

const ProjectDetailsModal = ({ show, onHide, data }) => {
  const { technologies, images, title, description, url } = data;

  const tech = technologies.map((icon, i) => (
    <li
      className="list-inline-item mx-3 project-details__modal__body__skill"
      key={i}
    >
      <Icon
        icon={icon.class}
        className="project-details__modal__body__skill__icon"
      />
      <p className="text-center project-details__modal__body__skill__name">
        {icon.name}
      </p>
    </li>
  ));

  const img = images.map((elem, i) => <div key={i} data-src={elem} />);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="project-details__modal"
    >
      <Modal.Header closeButton className="project-details__modal__header">
        <Col md={1} />
        <Col md={9}>
          <Modal.Title className="project-details__modal__header__title">
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <Icon
                  icon="majesticons:open"
                  style={{ marginLeft: "10px", fontSize: "2.5rem" }}
                />
              </a>
            )}
          </Modal.Title>
        </Col>
      </Modal.Header>

      <Modal.Body className="project-details__modal__body">
        <Col md={12}>
          <Col md={10} className="mx-auto">
            <AwesomeSlider
              animation="scaleOutAnimation"
              className="project-details__modal__body__image"
            >
              {img}
            </AwesomeSlider>
            <p className="project-details__modal__body__description">
              {description}
            </p>
            <Col md={12} className="text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </Col>
          </Col>
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetailsModal;
