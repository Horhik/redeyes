import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

/*
 * props: {
 *   header,
 *   pos,
 *   link
 *
 * }
 * */

const RecentBlock = (props) => {
  return (
    <Link
      to={props.src}
      className={`recent-block recent-block--${props.pos === ('github') ? 'right' :  "left"}`}
    >
      {props.header || "no content loaded..."}
    </Link>

  );
};

export default connect()(RecentBlock);
