import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";
import { Icon } from "@iconify/react";

import GitHubCorner from "../GitHubCorner/GitHubCorner";
import { githubRepoUrl } from "src/config";
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
        <GitHubCorner />
      </a>
      <div className="col-md-12">
        <header className="home__header">
          <Icon className="home__header__icon" icon="line-md:document-code" />
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
        </header>
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          offColor="#baaa80"
          onColor="#353535"
          className="mx-auto home__theme-switch"
          width={90}
          height={40}
          uncheckedIcon={SwitchIcon("dark")}
          checkedIcon={SwitchIcon("light")}
        />
      </div>
    </section>
  );
};

export default Header;
