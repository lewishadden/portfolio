import { Icon } from "@iconify/react";

import "./Chevron.scss";

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <Icon
        className="vertical-nav__chevron-icon__up"
        icon="line-md:chevron-up"
      />
      <Icon
        className="vertical-nav__chevron-icon__down"
        icon="line-md:chevron-down"
      />
    </div>
  );
};

export default VerticalNav;
