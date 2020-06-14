import React from "react";
import { connect } from "react-redux";
import RecentBlock from "./recent-block";
import Contacts from "../contacts";

const Recent = ({recent}) => {
  return (
    <section className={"recent"}>
      <h1 className={"h1 recent-header"}>Recent</h1>
      <ul className="recent-list">
             {recent.map((page) => {
                 return (
                   <li key={page.src} >
                     <RecentBlock src={page.src} header={page.content} pos={page.type}>
                     </RecentBlock>
                   </li>
                 );
             })}
           </ul>
    </section>
  );
};

export default connect(state => ({
    recent: state.content.recentNews
}))(Recent);
