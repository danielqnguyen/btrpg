import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; //essential
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import Reducer from "../src/redux/Reducer";

const Store = createStore(
  combineReducers({ Reducer }),
  compose(applyMiddleware(createLogger(), thunk, promise))
);

export default Store;
