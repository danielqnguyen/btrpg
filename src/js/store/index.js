import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import Reducer from "../reducers/index";

const store = createStore(
  combineReducers({ Reducer }),
  compose(applyMiddleware(createLogger(), thunk, promise()))
);

export default store;
