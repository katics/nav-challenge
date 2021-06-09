import { FC, ReactNode } from "react";

import Logo from "../../../assets/images/Logo.png";

import "./SignInSignUpLayout.scss";

interface SignInSignUpLayoutProps {
  children: ReactNode;
}

const SignInSignUpLayout: FC<SignInSignUpLayoutProps> = ({ children }) => {
  return (
    <div className="container-fluid signup-container">
      <div className="row justify-content-center">
        <div className="col-sm-4 signup-left">
          <h1 className="py-5">A simple social network. Random as well.</h1>
        </div>
        <div className="col-sm-8 py-5 signup-right">
          <div className="py-2">
            <img className="center" src={Logo} alt="slika" width="50px"></img>
            <h3 className="text-center py-2">
              <b>Randomly</b>
            </h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpLayout;
