import { FC } from "react";
import "./SignUp.scss";

const SignUp: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 signup-left"></div>
        <div className="col-md-8 py-4">
          <div className="col-md-1 test1">empty</div>
          <div className="card col-md-6 test2">
            <h4 className="card-title text-center">RANDOMLY</h4>
          </div>
          <div className="col-md-1 test1">empty</div>
          {/* <div className="col-md-6">
            <form>
              <div className="form-group col-md-4">
                <label>Name</label>
                <input type="text" className="form-control" value="a" />
              </div>
              <div className="form-group col-md-4">
                <label>Name</label>
                <input type="text" className="form-control" value="a" />
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
