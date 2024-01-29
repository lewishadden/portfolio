import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineItem from "./TimelineItem/TimelineItem";

import "./Experience.scss";

const Experience = ({ basicInfo, experience }) => {
  const headingText = basicInfo.sectionName.experience;

  const experienceTimelineItems = experience.map((work, i) => (
    <TimelineItem {...work} key={i} />
  ));

  return (
    <section id="experience" className="experience pb-5">
      <div className="col-md-12">
        <h2 className="experience__title">{headingText}</h2>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experienceTimelineItems}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto timeline-item__icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
