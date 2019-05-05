import { createStore, applyMiddleware } from "redux";
import updateDataReducer from "./reducer";

export default function configureStore(initialState) {
    const store = createStore(updateDataReducer, initialState);
    return store;
}
