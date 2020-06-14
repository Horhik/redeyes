import React from "react";
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
function App(props) {
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
}))(App);
