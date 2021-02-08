import { combineReducers } from "@reduxjs/toolkit";

import basketsReducer from "../Redux-slices/basketsSlice";
import alertsReducer from "../Redux-slices/alertsSlice";

export default combineReducers({
  baskets: basketsReducer,
  alerts: alertsReducer,
});
