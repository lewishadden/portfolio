import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import "./About.scss";

const About = ({ basicInfo }) => {
  const { image, sectionName, description, descriptionHeader } = basicInfo;

  const profilepic = "images/" + image;
  const headingText = sectionName.about;

  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center about__heading">{headingText}</h2>
          </Col>
        </Row>
        <Row className="about__body">
          <Col md={12}>
            <Card
              text="white"
              border="secondary"
              className="about__body__picture-card"
            >
              <Row>
                <Col md={3} className="pe-md-0 center">
                  <Card.Img
                    variant="top"
                    className="about__body__picture-card__image rounded-start"
                    src={profilepic}
                  />
                </Col>
                <Col md={9} className="ps-md-0">
                  <Card.Body
                    className="font-trebuchet text-start text-justify ms-3 me-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <Card.Title>
                      <span className="wave">{descriptionHeader} :) </span>
                    </Card.Title>
                    <br />
                    <Card.Text>{description}</Card.Text>
                    <br />
                    {/* <Row className="about__body__picture-card__tech">
                      <Col className="mb-3">
                        <Icon
                          icon="devicon:angular"
                          className="about__body__picture-card__tech__icon"
                        />
                      </Col>
                      <Col className="mb-3">
                        <Icon
                          icon="devicon:react"
                          className="about__body__picture-card__tech__icon"
                        />
                      </Col>
                      <Col className="mb-3">
                        <Icon
                          icon="devicon:vuejs"
                          className="about__body__picture-card__tech__icon"
                        />
                      </Col>
                    </Row> */}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
