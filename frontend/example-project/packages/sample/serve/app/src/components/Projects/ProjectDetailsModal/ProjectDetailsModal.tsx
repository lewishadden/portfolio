import { useState, useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import { Col, Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./ProjectDetailsModal.scss";

const ProjectDetailsModal = ({ show, onHide, data }) => {
  const [paddingHeight, setPaddingHeight] = useState(100);
  const { technologies, images, title, description, url } = data;

  const imageRefs = Array.from(images, () => useRef(null));

  const getImageSlides = () => (
    <div className="project-details__modal__body__image-container">
      <AwesomeSlider
        animation="cubeAnimation"
        className="project-details__modal__body__image-container__slider"
        style={{ "--slider-height-percentage": `${paddingHeight}%` }}
        onTransitionStart={(ref) => {
          const nextImg = imageRefs[ref.nextIndex].current;
          const { offsetWidth, offsetHeight } = nextImg;
          const newPaddingHeight = (offsetHeight / offsetWidth) * 100;
          setPaddingHeight(newPaddingHeight);
        }}
      >
        {images.map((elem, i) => (
          <div key={i}>
            <img
              src={elem}
              className="project-details__modal__body__image-container__img"
              ref={imageRefs[i]}
              onLoad={(e) => {
                const { offsetWidth, offsetHeight } = e.target;
                const newPaddingHeight = (offsetHeight / offsetWidth) * 100;
                setPaddingHeight(newPaddingHeight);
              }}
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );

  const TechIcons = () => (
    <ul className="list-inline mx-auto">
      {technologies.map((icon, i) => (
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
      ))}
    </ul>
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="project-details__modal"
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="project-details__modal__header"
      >
        <Col md={1} />
        <Col md={10}>
          <Modal.Title
            as="h3"
            className="project-details__modal__header__title"
          >
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-details__modal__header__title__link"
              >
                <Icon
                  icon="majesticons:open"
                  className="project-details__modal__header__title__link__icon"
                />
              </a>
            )}
          </Modal.Title>
        </Col>
      </Modal.Header>

      <Modal.Body className="project-details__modal__body">
        <Col md={12}>
          <Col md={10} className="mx-auto">
            {images.length > 0 && getImageSlides()}
            <p className="project-details__modal__body__description">
              {description}
            </p>
          </Col>
        </Col>
        <Col md={12} className="text-center">
          <TechIcons />
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetailsModal;
