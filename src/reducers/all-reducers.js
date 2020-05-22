import {combineReducers} from "redux";
import mainPageReducer from "./main-page-reducer";
import clientReducer from "./client-reducer";

const rootReducer = combineReducers({mainPage: mainPageReducer, client: clientReducer})

export default rootReducer
