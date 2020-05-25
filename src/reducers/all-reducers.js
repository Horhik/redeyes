import { combineReducers } from "redux";
import siteContentReducer from "./site-content-reducer";
import clientReducer from "./client-reducer";

const rootReducer = combineReducers({
  content: siteContentReducer,
  client: clientReducer,
});

export default rootReducer;
