import { useState } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { object, string } from "yup";
import { Icon } from "@iconify/react";

import "./ContactForm.scss";

const { VITE_API_URL } = import.meta.env;

const ContactForm = ({ onSuccess, onFail }) => {
  const [loading, setLoading] = useState(false);

  const formSchema = object().shape({
    firstName: string().required("Enter your first name"),
    lastName: string().required("Enter your last name"),
    email: string().email().required("Enter your email"),
    message: string().required("Please write a message"),
  });

  const handleSubmit = async ({ firstName, lastName, email, message }) => {
    setLoading(true);
    const response = await fetch(`${VITE_API_URL}/v1/sendmail`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, message }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    if (response.status === 200) onSuccess();
    else onFail(response);
  };

  return (
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
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="contact__body__form"
          >
            <Row className="g-3">
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
              <Col md={12}>
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
              <Col sm={12} md={6} className="mt-4">
                <Button
                  variant="info"
                  type="submit"
                  disabled={loading}
                  className="contact__body__form__submit-btn center"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        className="contact__body__form__submit-btn__loading-spinner me-2"
                        role="status"
                        aria-hidden="true"
                      />
                      <strong className="ms-2">Submitting...</strong>
                    </>
                  ) : (
                    <>
                      <Icon
                        icon="mdi:send"
                        className="contact__body__form__submit-btn__icon me-2"
                      />
                      <strong className="ms-2">Send Message</strong>
                    </>
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default ContactForm;
