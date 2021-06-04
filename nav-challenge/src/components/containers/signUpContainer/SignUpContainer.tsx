import moment from "moment";
import React, { FC, useState } from "react";
import AppProvider, {
  appContext,
  useDispatchApp,
} from "../../../store/AppProvider";
import store from "../../../store/Index";
import { fetchRegisterUser } from "../../../store/user/UserActions";
import { SignUpFormProps } from "../../../utils/types/SignUpFormProps";
import { UserSignUpDataType } from "../../../utils/types/UserSignUpDataType";
import SignUpPage from "../../pages/signUpPage/SignUpPage";

const SignUpProvider: FC = () => {
  return (
    <AppProvider store={store} context={appContext}>
      <SignUpContainer />
    </AppProvider>
  );
};
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

  const userDispatch = useDispatchApp();

  const [signUpDataRequest, setSignUpDataRequest] = useState(userSignUpData);
  const [selectedDate, setSelectedDate] = useState("");

  const signUpClick = (e: any) => {
    e.preventDefault();

    const selectedDate = moment(signUpDataRequest.dateOfBirth);

    signUpDataRequest.dateOfBirth = selectedDate.isValid()
      ? selectedDate.format("DD/MM/YYYY")
      : "";

    userDispatch(fetchRegisterUser(signUpDataRequest));
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
    setSignUpDataRequest({
      ...signUpDataRequest,
      dateOfBirth: e.target.value,
    });
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
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      <SignUpPage />
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;
