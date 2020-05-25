import React from "react";
import "./css/basic.scss";
import HomePage from "./components/pages/homepage";
import {connect} from 'react-redux'
import NavHeader from "./components/navigation/nav-header";
import {Route} from 'react-router-dom'
import PageLinks from "./components/navigation/page-links";
import Logo from "./components/elements/logo";
import PortfolioPage from "./components/pages/portfolio";
import BlogPage from "./components/pages/blog";
function App(props) {
  return (
    <div className="App">
        <Logo child={props.pageQuote} header={props.currentPageName}/>
        <PageLinks/>
        <Route path={props.currentPath} component={props.currentPage}/>
    </div>
  );
}

export default connect(
    state => ({
        currentPath: state.client.currentPath,
        currentPage: state.client.currentPage,
        currentPageName: state.client.currentPageName,
        pageQuote: state.client.pageQuote
    })
)(App);
