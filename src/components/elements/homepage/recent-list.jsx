import React from "react";
import { connect } from "react-redux";
import RecentBlock from "./recent-block";
import Contacts from "../contacts";

const Recent = (props) => {
  return (
    <section className={"recent"}>
      <h1 className={"h1 recent-header"}>Recent</h1>
      <ul className="recent-list">
        <li>
          <RecentBlock link={"/portfolio"} header={'Added "TaSquare" project to portfolio '} pos={"right"} />
        </li>

        <li>
          <RecentBlock link={"/portfolio"} header={'Added Snake game to portfolio'} pos={"right"} />
        </li>

        <li>
          <RecentBlock
              link={"/portfolio"}
              header={'Added "AnkiLan" project to portfolio'}
              pos="right"
          />
        </li>
      </ul>
    </section>
  );
};

export default connect()(Recent);
