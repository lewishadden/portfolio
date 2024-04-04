import { Icon } from "@iconify/react";

import "./VerticalNav.scss";

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <Icon
        className="vertical-nav__chevron-icon up"
        icon="line-md:chevron-up"
      />
      <Icon
        className="vertical-nav__chevron-icon down"
        icon="line-md:chevron-down"
      />
    </div>
  );
};

export default VerticalNav;
