import { call, takeLatest } from "redux-saga/effects";

import { signUpUserAPI } from "../../utils/api";

import { SIGNUP_USER } from "./UserActionTypes";

import toastr from "toastr";

export function* signUpUser(action: any): any {
  try {
    yield call(signUpUserAPI, action.payload);
    toastr.success("User signed up successfully");
    //TODO Get response data and reddirect user to signIn page
  } catch (err) {
    console.log("ERROR: " + err.statusText);
    displayErrorMessages(err.data);
  }
}

export default function* userSagas(): any {
  yield takeLatest(SIGNUP_USER, signUpUser);
}

const displayErrorMessages = (data: { key: string; value: [] }) => {
  Object.entries(data).forEach(([key, value]) => {
    toastr.error(key + ": " + value);
  });
};
