import React from "react";
import { connect } from "react-redux";
import Contacts from "../elements/contacts";

const PortfolioItem = (props) => {
  const name = props.project.name;
  const description = props.project.description;
  const gallery = props.project.gallery;
  const links = props.project.links;
  return (
    <section className={"project"}>
      <h2 className="project-name">{name}</h2>
      <p className="project-description">{description}</p>
      {gallery ? <ul className="project-gallery"></ul> : ""}
      <ul className="project-links">
        <li className="project-link">GitHub</li>
      </ul>
    </section>
  );
};

const PortfolioPage = (props) => {
  return (
    <div>
      <ul className="portfolio">
        {props.portfolio.map((project) => (
          <li className={"portfolio-project"} key={project.name}>
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
