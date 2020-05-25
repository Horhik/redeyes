import React from "react";
import asciiWord from "../../functions/ascii-word";
import { Link } from "react-router-dom";
import pages from "../../constants/routes";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/route-actions";

const PageLinks = (props) => {
  const goToPage = (page) => {
    props.setCurrentPage(page);
  };
  return (
    <ul className={"page-list"}>
      {pages.map((page) => {
        if (page.src !== props.currentPageSrc) {
          return (
            <li key={page.src} className={"page-link"}>
              <Link to={page.src} onClick={() => goToPage(page)}>
                {asciiWord(page.name)}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default connect(
  (state) => ({
    currentPageSrc: state.client.currentPath,
  }),
  {
    setCurrentPage,
  }
)(PageLinks);
