import { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";
import { Icon } from "@iconify/react";

import { GitHubCornerSVG } from "icons";

import { githubRepoUrl } from "config/global";
import "./Home.scss";

const Header = ({ basicInfo }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const theme = checked ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
  }, [checked]);

  const { name, titles } = basicInfo;

  const titlesUpperCased = titles.map((x) => [x.toUpperCase(), 1500]).flat();

  const SwitchIcon = (theme) => {
    let iconClass, marginLeft;
    if (theme === "light") {
      iconClass = "noto-v1:sun-with-face";
      marginLeft = "10px";
    } else {
      iconClass = "twemoji:owl";
      marginLeft = "20px";
    }

    return (
      <span
        className={`iconify home__theme-switch ${theme}`}
        data-icon={iconClass}
        data-inline="false"
        style={{
          height: "100%",
          fontSize: 25,
          marginLeft,
        }}
      />
    );
  };

  return (
    <section id="home" className="home">
      <a
        href={githubRepoUrl}
        target="_blank"
        className="home__github-corner"
        aria-label="View source on GitHub"
      >
        <GitHubCornerSVG />
      </a>
      <Container className="d-flex vh-100">
        <Stack as="header" gap={2} className="home__header center">
          <Icon className="home__header__icon" icon="line-md:document-code" />
          <h1 className="home__header__name">
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
        </Stack>
      </Container>
    </section>
  );
};

export default Header;
