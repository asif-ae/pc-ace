import { combineReducers } from "redux";

import shopingReducer from "./Shopping/shoppingReducer";

const rootReducer = combineReducers({
  shop: shopingReducer,
});

export default rootReducer;