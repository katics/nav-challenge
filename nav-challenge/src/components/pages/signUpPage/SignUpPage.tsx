import { FC, useContext } from "react";

import { SignUpFormProps } from "../../../utils/types/SignUpFormProps";

import { SignUpContext } from "../../containers/signUpContainer/SignUpContainer";

import SignInSignUpLayout from "../../layout/signUpSignInLayout/SignInSignUpLayout";

import SignUpForm from "../../signUpForm/SignUpForm";

import "./SignUpPage.scss";

const SignUpPage: FC = () => {
  const signUpData: SignUpFormProps = useContext(SignUpContext);
  return (
    <SignInSignUpLayout>
      <SignUpForm
        singUpClick={signUpData.singUpClick}
        signUpData={signUpData.signUpData}
        firstNameChanged={signUpData.firstNameChanged}
        lastNamChanged={signUpData.lastNamChanged}
        emailChanged={signUpData.emailChanged}
        usernameChanged={signUpData.usernameChanged}
        passwordChanged={signUpData.passwordChanged}
        dateOfBirthChanged={signUpData.dateOfBirthChanged}
        selectedDate={signUpData.selectedDate}
      />
    </SignInSignUpLayout>
  );
};

export default SignUpPage;
