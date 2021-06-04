import { FC } from "react";
import { UserSignUpDataType } from "../../utils/types/UserSignUpDataType";
import FormFieldSet from "../formFieldSet/FormFieldSet";
import "./SignUpForm.scss";

interface SignUpFormProps {
  signUpData: UserSignUpDataType;
  firstNameChanged: (e: any) => void;
  lastNamChanged: (e: any) => void;
  emailChanged: (e: any) => void;
  usernameChanged: (e: any) => void;
  passwordChanged: (e: any) => void;
  dateOfBirthChanged: (e: any) => void;
  singUpClick: (e: any) => void;
}

const SignUpForm: FC<SignUpFormProps> = ({
  signUpData,
  singUpClick,
  firstNameChanged,
  lastNamChanged,
  emailChanged,
  usernameChanged,
  passwordChanged,
  dateOfBirthChanged,
}) => {
  return (
    <div className=" card col-sm-6 py-2 form-container form-margin">
      <h5 className="card-title text-center signup-form-title">
        Create an account
      </h5>
      <div className="card-body">
        <form onSubmit={singUpClick}>
          <div className="row">
            <div className="form-group col-sm-6">
              <FormFieldSet
                type="text"
                inputValue={signUpData.firstName}
                label="First Name"
                placeHolder="Will"
                handleChange={firstNameChanged}
              />
            </div>
            <div className="form-group float-right col-sm-6">
              <FormFieldSet
                type="text"
                inputValue={signUpData.lastName}
                label="Last Name"
                placeHolder="Smith"
                handleChange={lastNamChanged}
              />
            </div>
          </div>
          <div className="form-group col-sm-13">
            <FormFieldSet
              type="text"
              inputValue={signUpData.email}
              label="Email"
              placeHolder="will.smith@gmail.com"
              handleChange={emailChanged}
            />
          </div>
          <div className="form-group col-sm-13">
            <FormFieldSet
              type="text"
              inputValue={signUpData.username}
              label="Username"
              placeHolder="Will.S"
              handleChange={usernameChanged}
            />
          </div>
          <div className="form-group col-sm-13">
            <FormFieldSet
              type="password"
              inputValue={signUpData.password}
              label="Password"
              placeHolder="password"
              handleChange={passwordChanged}
            />
          </div>
          <div className="form-group col-sm-13">
            <FormFieldSet
              type="date"
              inputValue={signUpData.dateOfBirth}
              label="Date of birth"
              placeHolder=""
              handleChange={dateOfBirthChanged}
            />
          </div>
          <div className="py-3">
            <button className="btn btn-block register-button">
              Create Account
            </button>
          </div>
        </form>
        <hr></hr>
        <h6 className="text-center">
          {/* TODO late on add link to sign in form */}
          Already have and account?{" "}
          <span className="text-primary">Sign In</span>
        </h6>
      </div>
    </div>
  );
};

export default SignUpForm;
