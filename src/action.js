export const UPDATE_GLOBAL_DATA = "UPDATE_GLOBAL_DATA";

const updateGlobalData = payload => ({
  type: UPDATE_GLOBAL_DATA,
  payload
});

export default { updateGlobalData };
