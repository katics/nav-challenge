import { createStore, Store, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./RootReducer";

import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
