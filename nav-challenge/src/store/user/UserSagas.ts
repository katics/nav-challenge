import { call, put, takeLatest } from "redux-saga/effects";
import { signUpUserAPI } from "../../utils/api";
import { SIGNUP_USER } from "./UserActionTypes";
import * as toastr from "toastr";

export function* signUpUser(action: any): any {
  try {
    yield call(signUpUserAPI, action.payload);
    toastr.success("User signed up successfully");
    //TODO Get response data and reddirect user to signIn page
  } catch (err) {
    console.log("ERROR: " + err.statusText);
    toastr.error("Error, user not signed up. Please try again");

    //TODO Show erros on UI
  }
}

export default function* userSagas(): any {
  yield takeLatest(SIGNUP_USER, signUpUser);
}
