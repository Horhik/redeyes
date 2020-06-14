import React from "react";
import { connect } from "react-redux";
import Contacts from "../elements/contacts";
import { APP } from "../../constants/link-types";

const PortfolioItem = (props) => {
  const name = props.project.name;
  const description = props.project.description;
  const gallery = props.project.gallery;
  const links = props.project.links;
  const pageLink = props.project.links;
  return (
    <section className={"project"}>
      <h2 className="project-name">
        <a href={pageLink} className={"link"}>
          {name}
        </a>
      </h2>
      <p className="project-description">{description}</p>
      {gallery ? <ul className="project-gallery"></ul> : ""}
      <ul className="project-links">
        {links.map((link) => (
          <li
            key={link.src}
            className={`project-link project-link--${link.type}`}
          >
            {link.type === APP && link.logo ? (
              <img
                className={"project-link__logo"}
                src={link.logo}
                alt="TaSquare logo"
              />
            ) : (
              ""
            )}

            <a className={"link"} href={link.src}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const PortfolioPage = (props) => {
  return (
    <div>
      <ul className="portfolio">
        {props.portfolio.map((project) => (
          <li key={project.name}>
            <PortfolioItem project={project} />
          </li>
        ))}
      </ul>
      <Contacts />
    </div>
  );
};

export default connect((state) => ({
  portfolio: state.content.portfolioItems,
}))(PortfolioPage);
