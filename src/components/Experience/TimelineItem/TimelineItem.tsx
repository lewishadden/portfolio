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
    <div className="timeline__item__main-badge-container">
      {mainTech.map((technology, i) => (
        <Badge
          pill
          bg="secondary"
          className="timeline__item__main-badge me-2 mb-2"
          key={i}
        >
          {technology}
        </Badge>
      ))}
    </div>
  );

  const ExtraTechBadges = () => (
    <div className="timeline__item__extra-badge-container">
      {technologies.map((technology, i) => (
        <Badge
          pill
          className="timeline__item__extra-badge me-2 mb-2"
          key={i}
          bg="secondary"
        >
          {technology}
        </Badge>
      ))}
    </div>
  );

  return (
    <VerticalTimelineElement
      className="timeline__item"
      date={years}
      iconStyle={{
        background: "rgb(63 63 63)",
        color: "#fff",
      }}
      icon={<Icon icon={icon} className="timeline__item__icon" />}
    >
      <MainTechBadges />
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      <ExtraTechBadges />
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
