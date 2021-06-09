import moment from "moment";

import React, { ChangeEvent, FC, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { registerUser } from "../../../store/user/UserActions";

import { SELECTED_DATE_FORMAT } from "../../../utils/types/CommonConsts";

import { SignUpFormProps } from "../../../utils/types/SignUpFormProps";

import { UserSignUpDataType } from "../../../utils/types/UserSignUpDataType";

import SignUpPage from "../../pages/signUpPage/SignUpPage";

export const SignUpContext = React.createContext({} as SignUpFormProps);
const SignUpContainer: FC = () => {
  const userSignUpData: UserSignUpDataType = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    dateOfBirth: "",
  };

  const userDispatch = useDispatch();

  const [signUpDataRequest, setSignUpDataRequest] = useState(userSignUpData);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const selectedDateForRequest = moment(selectedDate);

    selectedDateForRequest.isValid() &&
      setSignUpDataRequest({
        ...signUpDataRequest,
        dateOfBirth: selectedDateForRequest.format(SELECTED_DATE_FORMAT),
      });
  }, [selectedDate]);

  const signUpClick = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    userDispatch(registerUser(signUpDataRequest));
  };

  const firstNameChanged = (e: any) => {
    setSignUpDataRequest({
      ...signUpDataRequest,
      firstName: e.target.value,
    });
  };

  const lastNamChanged = (e: any) => {
    setSignUpDataRequest({
      ...signUpDataRequest,
      lastName: e.target.value,
    });
  };

  const emailChanged = (e: any) => {
    setSignUpDataRequest({
      ...signUpDataRequest,
      email: e.target.value,
    });
  };

  const usernameChanged = (e: any) => {
    setSignUpDataRequest({
      ...signUpDataRequest,
      username: e.target.value,
    });
  };

  const passwordChanged = (e: any) => {
    setSignUpDataRequest({
      ...signUpDataRequest,
      password: e.target.value,
    });
  };

  const dateOfBirthChanged = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const contextValue: SignUpFormProps = {
    signUpData: signUpDataRequest,
    singUpClick: signUpClick,
    firstNameChanged: firstNameChanged,
    lastNamChanged: lastNamChanged,
    emailChanged: emailChanged,
    usernameChanged: usernameChanged,
    passwordChanged: passwordChanged,
    dateOfBirthChanged: dateOfBirthChanged,
    selectedDate: selectedDate,
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      <SignUpPage />
    </SignUpContext.Provider>
  );
};

export default SignUpContainer;
