import { createStore, applyMiddleware } from "redux";
import updateDataReducer from "./reducer";
import logger from "redux-logger";

export default function configureStore(initialState) {
  const store = createStore(
    updateDataReducer,
    initialState,
    applyMiddleware(logger)
  );
  return store;
}
