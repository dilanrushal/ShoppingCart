import { CartReducer } from "../src/Redux/Reducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers
} from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cart: CartReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.subscribe(() => console.log("State", store.getState()));
export default store;
