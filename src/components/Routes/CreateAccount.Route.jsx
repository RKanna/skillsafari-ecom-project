import TopLayout from "../TopLayout.component";
import SignInOptions from "./SignInOptions.component";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <section className="new-account">
      <TopLayout content={"Sign Up"} />
      <br />
      <div className="for-new-flex">
        <div className="form-row-one">
          <label htmlFor="email">Email Address</label>
          <input
            className="for-padding"
            type="email"
            id="email"
            placeholder="Please Enter Your Email"
          />
          <label htmlFor="name">First Name</label>
          <input
            className="for-padding"
            type="text"
            id="name"
            placeholder="Please Enter Your First Name"
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            className="for-padding"
            type="text"
            id="lastname"
            placeholder="Please Enter Your Last Name"
          />
          <label htmlFor="pass">Password</label>
          <input
            className="for-padding"
            type="password"
            id="pass"
            placeholder="Please Enter Your Password"
          />
        </div>
        <div className="full-wid">
          <SignInOptions />
        </div>
      </div>
      <Link className="backtolog" to="/Login">
        Back to Login
      </Link>
    </section>
  );
};

export default CreateAccount;
