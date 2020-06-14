import { SET_CURRENT_PAGE } from "../constants/routes";
import HomePage from "../components/pages/homepage";
import { DEFAULT_DOMAIN } from "../constants/link-types";

const initialState = {
  lang: "en",
  theme: "dark",
  currentPath: "/",
  currentPage: HomePage,
  currentPageName: DEFAULT_DOMAIN,
  pageQuote: "O. George’s site",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPath: action.page.src,
        currentPage: action.page.page,
        currentPageName: action.page.name,
        pageQuote: action.page.quote,
      };
    default:
      return state;
  }
};

export default clientReducer;
