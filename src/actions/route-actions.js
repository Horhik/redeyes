import { SET_CURRENT_PAGE } from "../constants/routes";

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
