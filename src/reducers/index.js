import { combineReducers } from "redux";
import { walletReducer } from "./wallet";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  wallet: walletReducer,
  ui: uiReducer
});
