//export const ct = "ct"
import BlogPage from "../components/pages/blog";
import PortfolioPage from "../components/pages/portfolio";
import HomePage from "../components/pages/homepage";

const pages = [
  {
    name: "horhik.dev",
    src: "/",
    quote: "O. George’s site",
    page: HomePage,
  },
  {
    name: "portfolio",
    src: "/portfolio",
    page: PortfolioPage,
  },
  {
    name: "blog",
    src: "/blog",
    page: BlogPage,
    quote: "Articles, ideas and thoughts from \nO. George",
  },
];

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export default pages;
