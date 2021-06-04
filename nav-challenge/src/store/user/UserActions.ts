import { AnyAction } from "redux";
import { UserSignUpDataType } from "../../utils/types/UserSignUpDataType";
import { SIGNUP_USER } from "./UserActionTypes";

export const fetchRegisterUser = (
  userRegData: UserSignUpDataType
): AnyAction => ({
  type: SIGNUP_USER,
  payload: userRegData,
});
