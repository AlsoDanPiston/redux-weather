import { combineReducers } from "redux";
import ForecastReducer from "./reducer-forecast";

const rootReducer = combineReducers({
  posts: ForecastReducer,
});

export default rootReducer;