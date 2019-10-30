export const SET_CURRENCY = "SET_CURRENCY";

export function setCurrency(selected) {
  return dispatch => {
    dispatch({
      type: SET_CURRENCY,
      payload: selected 
    });
  };
}
