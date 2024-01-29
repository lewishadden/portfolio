import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";

import "./ProjectDetailsModal.scss";

const ProjectDetailsModal = ({ show, onHide, data }) => {
  const { technologies, images, title, description, url } = data;

  const tech = technologies.map((icons, i) => (
    <li
      className="list-inline-item mx-3 project-details__modal__body__skill"
      key={i}
    >
      <i className={`${icons.class} project-details__modal__body__skill__icon`}>
        <p className="text-center project-details__modal__body__skill__name">
          {icons.name}
        </p>
      </i>
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
        <div className="col-md-1" />
        <div className="col-md-9">
          <Modal.Title className="project-details__modal__header__title">
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            )}
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body className="project-details__modal__body">
        <div className="col-md-12">
          <div className="col-md-10 mx-auto">
            <AwesomeSlider
              animation="scaleOutAnimation"
              className="project-details__modal__body__image"
            >
              {img}
            </AwesomeSlider>
            <p className="project-details__modal__body__description">
              {description}
            </p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetailsModal;
