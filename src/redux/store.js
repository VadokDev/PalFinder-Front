import { createStore, combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer.js";

const appReducers = combineReducers({
	searchReducer
});

export default createStore(appReducers);
