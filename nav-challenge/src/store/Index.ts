import { createStore, Store, applyMiddleware } from "redux";

import rootReducer from "./RootReducer";

const store: Store = createStore(rootReducer, applyMiddleware());

export default store;
