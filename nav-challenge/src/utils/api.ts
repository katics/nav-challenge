import axios from "axios";

import { UserSignUpDataType } from "../utils/types/UserSignUpDataType";

const apiUrl = "https://randomlyapi.symphony.is";

export const signUpUserAPI = (signUpData: UserSignUpDataType): any => {
  console.log(signUpData);
  return axios({
    url: apiUrl + "/api/auth/signup/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(signUpData),
  }).catch(err => {
    return Promise.reject(err.response);
  });
};
