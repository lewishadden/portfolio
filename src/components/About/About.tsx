import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";

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
              <div className="col-md-12 about__body__picture-card__tech">
                <Icon
                  icon="devicon:angular"
                  className="about__body__picture-card__tech__icon"
                />
                <Icon
                  icon="devicon:react"
                  className="about__body__picture-card__tech__icon"
                />
                <Icon
                  icon="devicon:vuejs"
                  className="about__body__picture-card__tech__icon"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 center about__body__description">
            <div className="col-md-10">
              <Card>
                <div className="card-header">
                  <Icon icon="emojione:red-circle" className="me-3" />
                  <Icon icon="twemoji:yellow-circle" className="me-3" />
                  <Icon icon="twemoji:green-circle" className="me-3" />
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
