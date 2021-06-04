import { fork } from "@redux-saga/core/effects";
import userSagas from "./user/UserSagas";

export function* rootSaga(): any {
  yield fork(userSagas);
}

export default rootSaga;
