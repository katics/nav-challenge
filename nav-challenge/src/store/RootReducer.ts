import { combineReducers, Reducer } from "redux";

import userReducer from "../store/user/UserReducer";

const appReducer = combineReducers({
  userReducer,
});

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
