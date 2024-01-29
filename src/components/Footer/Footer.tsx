import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

const Footer = ({ basicInfo }) => {
  const { social, name } = basicInfo;

  const networks = social.map((network) => (
    <span key={network.name} className="m-4">
      <a href={network.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", network.class]} size={"lg"} />
      </a>
    </span>
  ));

  return (
    <footer className="footer">
      <div className="col-md-12">
        <div className="footer__social-links">{networks}</div>
        <div className="py-4">
          <small>Copyright &copy; {name}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
