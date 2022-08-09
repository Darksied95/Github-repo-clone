import { BsGithub } from "react-icons/bs";
import "./footer.modules.css";
const Footer = () => {
  return (
    <div className="main-container">
      <ul className="footer-list">
        <li>
          <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
            Terms
          </a>
        </li>
        <li>
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
            Privacy
          </a>
        </li>
        <li>
          <a href="https://github.com/security">Security</a>
        </li>
        <li>
          <a href="https://www.githubstatus.com/">Status</a>
        </li>
        <li>
          <a href="https://docs.github.com/en">Docs</a>
        </li>
        <li>
          <a href="https://support.github.com/?tags=dotcom-footer">
            Contact Github
          </a>
        </li>
        <li>
          <a href="https://github.com/pricing">Pricing</a>
        </li>
        <li>
          <a href="https://docs.github.com/en">API</a>
        </li>
        <li>
          <a href="https://services.github.com/">Training</a>
        </li>
        <li>
          <a href="https://github.blog/">Blog</a>
        </li>
        <li>
          <a href="https://github.com/about">About</a>
        </li>
      </ul>
      <div className="last" style={{ color: "768390" }}>
        <BsGithub size={25} />
        <p>&copy; 2022 GitHub, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
