import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

import WindowHeader from "../WindowHeader/WindowHeader";
import "./About.scss";

const About = ({ basicInfo }) => {
  const { image, sectionName, description, descriptionHeader } = basicInfo;

  const profilepic = "images/" + image;
  const headingText = sectionName.about;

  return (
    <section id="about" className="about">
      <div className="col-md-12">
        <h2 className="about__heading">
          <span>{headingText}</span>
        </h2>
        <div className="row center mx-auto mb-5 about__body">
          <div className="col-md-4 mb-5 center">
            <div className="about__body__picture-card">
              <img
                className="about__body__picture-card__image"
                height="250px"
                src={profilepic}
                alt="Avatar placeholder"
              />
              <Icon
                icon={angularIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon={reactIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
              <Icon
                icon={vueIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
            </div>
          </div>
          <div className="col-md-8 center about__body__description">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <WindowHeader />
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{descriptionHeader} :) </span>
                  <br />
                  <br />
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
