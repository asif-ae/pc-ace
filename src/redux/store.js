import rootReducer from "./rootReducer";

const { createStore } = require("redux");

const store = createStore(rootReducer);

export default store;