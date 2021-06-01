import { combineReducers, Reducer } from "redux";

const appReducer = combineReducers({}); //TODO ADD valid reducer

const rootReducer: Reducer = (state, action: any) => appReducer(state, action);

export default rootReducer;
