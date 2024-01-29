import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";

import "./TimelineItem.scss";

const TimelineItem = ({
  technologies,
  mainTech,
  title,
  company,
  years,
  icon,
}) => {
  const MainTechBadges = () => (
    <div className="timeline-item__main-badge-container">
      {mainTech.map((technology, i) => (
        <Badge pill className="timeline-item__main-badge me-2 mb-2" key={i}>
          {technology}
        </Badge>
      ))}
    </div>
  );

  const ExtraTechBadges = () => (
    <div className="timeline-item__extra-badge-container">
      {technologies.map((technology, i) => (
        <Badge
          pill
          className="timeline-item__experience-badge me-2 mb-2"
          key={i}
        >
          {technology}
        </Badge>
      ))}
    </div>
  );

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work timeline-item"
      date={years}
      iconStyle={{
        background: "#AE944F",
        color: "#fff",
      }}
      icon={
        <Icon
          icon={icon}
          style={{
            width: "40px",
            height: "40px",
            margin: "-20px 0px 0px -20px",
          }}
        />
      }
    >
      <MainTechBadges />
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      <ExtraTechBadges />
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
