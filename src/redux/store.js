import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const { createStore } = require("redux");

const store = createStore(rootReducer, composeWithDevTools());

export default store;