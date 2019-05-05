import { UPDATE_GLOBAL_DATA } from "./action";
import { cloneDeep } from "lodash-es";

const defaultState = [];

const updateDataReducer = (state = defaultState, action) => {
  console.log("action called", action);
  switch (action.type) {
    case UPDATE_GLOBAL_DATA:
      const currentState = cloneDeep(state);
      return currentState.concat(action.payload);

    default:
      return state;
  }
};

export default updateDataReducer;
