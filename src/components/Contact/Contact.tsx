import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./Contact.scss";

const Contact = ({ basicInfo }) => {
  const { sectionName, contactInfo } = basicInfo;

  const headingText = sectionName.contact;
  const ContactBadges = () =>
    contactInfo.map((info, i) => (
      <Col
        md="auto"
        lg={12}
        className="contact__body__personal-info__item d-flex"
        key={i}
      >
        <div className="contact__body__personal-info__item__icon-badge rounded-circle me-4">
          <Icon
            icon={info.class}
            className="contact__body__personal-info__item__icon-badge__icon"
          />
        </div>
        <div className="contact__body__personal-info__item__details">
          <div className="contact__body__personal-info__item__details__name">
            {info.name}
          </div>
          <div className="contact__body__personal-info__item__details__text">
            {info.value}
          </div>
        </div>
      </Col>
    ));

  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center contact__heading">{headingText}</h2>
          </Col>
        </Row>
        <Row className="contact__body g-5">
          <Col md={12} lg={4}>
            <Row className="contact__body__personal-info h-100 gy-4">
              <ContactBadges />
            </Row>
          </Col>
          <Col md={12} lg={8}>
            <Form onSubmit={(e) => console.log(e)}>
              <Row className="gx-3 gy-4">
                <Col sm={12} md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name *" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email *" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message *"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
