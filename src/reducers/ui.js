import { SET_CURRENCY } from "./../actions/UIActions";

const initialState = {
  selectedCurrency: null
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, selectedCurrency: action.payload };

    default:
      return state;
  }
}
