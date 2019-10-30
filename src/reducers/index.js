import { combineReducers } from "redux";
import { walletReducer } from "./wallet";

export const rootReducer = combineReducers({
  wallet: walletReducer
});
