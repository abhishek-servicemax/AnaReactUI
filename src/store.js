import {createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import userStore from "./reducers/userReducer";
import barReducer from "./reducers/barchartReducer";
import loginReducer from "./reducers/loginReducer";


export default createStore(
		combineReducers({userStore, barReducer, loginReducer}),
		{},
		applyMiddleware(logger, thunk, promise())
);
