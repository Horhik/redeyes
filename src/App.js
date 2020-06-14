import React, {useEffect} from "react";
import "./css/basic.scss";
import HomePage from "./components/pages/homepage";
import { connect } from "react-redux";
import NavHeader from "./components/navigation/nav-header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageLinks from "./components/navigation/page-links";
import Logo from "./components/elements/logo";
import PortfolioPage from "./components/pages/portfolio";
import BlogPage from "./components/pages/blog";
import pages from "./constants/routes";
import {setCurrentPage} from "./actions/route-actions";

function App(props) {
  useEffect(() => {
    const path = window.location.pathname
    switch (path) {
      case pages[1].src:
        props.setCurrentPage(pages[1])
        return 0
      case pages[2].src:
        props.setCurrentPage(pages[2])
        return 0
      default:
        props.setCurrentPage(pages[0])
        return 0
    }
  }, [] )
  return (
    <div className="App">
      <BrowserRouter>
        <Logo child={props.pageQuote} header={props.currentPageName} />
        <PageLinks />
        <Switch>
          <Route
              exact
              path={'/'}
              component={HomePage}
          />
          <Route
              exact
              path={'/blog'}
              component={BlogPage}
          />
          <Route
              exact
              path={'/portfolio'}
              component={PortfolioPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect((state) => ({
  currentPath: state.client.currentPath,
  currentPage: state.client.currentPage,
  currentPageName: state.client.currentPageName,
  pageQuote: state.client.pageQuote,
}), {
  setCurrentPage
})(App);
