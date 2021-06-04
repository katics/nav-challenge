import { UserSignUpDataType } from "./UserSignUpDataType";

export interface SignUpFormProps {
  signUpData: UserSignUpDataType;
  firstNameChanged: (e: any) => void;
  lastNamChanged: (e: any) => void;
  emailChanged: (e: any) => void;
  usernameChanged: (e: any) => void;
  passwordChanged: (e: any) => void;
  dateOfBirthChanged: (e: any) => void;
  singUpClick: (e: any) => void;
}
