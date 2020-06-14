import React from "react";
import { connect } from "react-redux";

const About = (props) => {
  return (
    <section>
      <h2>About me</h2>
      <section>
        <div>
          <h3>Who I am?</h3>
        </div>
        <div>
          <h3>What I can?</h3>
        </div>
      </section>
    </section>
  );
};

export default connect()(About);
