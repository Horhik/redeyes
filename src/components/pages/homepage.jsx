import React from "react";
import Recent from "../elements/homepage/recent-list";
import { connect } from "react-redux";
import Contacts from "../elements/contacts";

const HomePage = () => {
  return (
    <div>
      <Recent />
      <Contacts />
    </div>
  );
};
export default connect((state) => ({}), {})(HomePage);
