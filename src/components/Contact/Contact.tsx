import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Formik } from "formik";
import { object, string } from "yup";
import { Icon } from "@iconify/react";

import "./Contact.scss";

const Contact = ({ basicInfo }) => {
  const { sectionName, contactInfo } = basicInfo;
  const headingText = sectionName.contact;

  const formSchema = object().shape({
    firstName: string().required("Please enter your first name"),
    lastName: string().required("Please enter your last name"),
    email: string().email().required("Please enter your email"),
    message: string().required("Please write a message"),
  });

  const handleSubmit = async ({ firstName, lastName, email, message }) => {
    const response = await fetch("http://localhost:3000/api/sendmail", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, message }),
      headers: { "Content-Type": "application/json" },
    });
    const body = await response.json();
    console.log(body);
  };

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
            <Formik
              validationSchema={formSchema}
              onSubmit={handleSubmit}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="gx-3 gy-4">
                    <Col sm={12} md={6}>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name *"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group controlId="formLasttName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last Name *"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email *"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Your message *"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
