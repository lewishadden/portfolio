import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";

import TimelineItem from "./TimelineItem/TimelineItem";
import "./Experience.scss";

const Experience = ({ basicInfo, experience }) => {
  const headingText = basicInfo.sectionName.experience;

  const experienceTimelineItems = experience.map((work, i) => (
    <TimelineItem {...work} key={i} />
  ));

  return (
    <section id="experience" className="experience">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="experience__title">{headingText}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mx-auto">
            <VerticalTimeline>
              {experienceTimelineItems}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <Icon
                    icon="twemoji:hourglass-done"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "-20px 0px 0px -20px",
                    }}
                  />
                }
              />
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
