import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";

import "./Home.scss";

const Header = ({ basicInfo }) => {
  const { name, titles } = basicInfo;

  const [checked, setChecked] = useState(false);
  const titlesUpperCased = titles.map((x) => [x.toUpperCase(), 1500]).flat();

  const onThemeSwitchChange = (newChecked) => {
    setChecked(newChecked);
    setTheme();
  };

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return (
    <div className="home">
      <div className="col-md-12">
        <header className="home__header">
          <span
            className="iconify home__header__icon"
            data-icon="la:laptop-code"
            data-inline="false"
          ></span>
          <br />
          <h1 className="mb-0 home__header__name">
            <TypeAnimation
              sequence={[name]}
              wrapper="p"
              speed={15}
              cursor={false}
            />
          </h1>
          <div className="home__header__titles">
            <TypeAnimation
              sequence={titlesUpperCased}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2.5rem" }}
              repeat={Infinity}
            />
          </div>
          <Switch
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "20px",
                  color: "#353239",
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}
              ></span>
            }
            id="icon-switch"
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
