import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignInOptions from "./SignInOptions.component";
import TopLayout from "../TopLayout.component";
//firebase login functions
import { signInWithGooglePopup } from "../../utils/index";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    const result = await signInWithGooglePopup();
    console.log(result);
  };

  return (
    <section className="for-flex">
      <TopLayout content={"Login"} />
      <br />
      <form action="">
        <div className="form-row-one">
          <label htmlFor="email">Email Address</label>
          <input
            className="for-padding"
            type="email"
            id="email"
            placeholder="Please Enter Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="for-padding"
            type="password"
            id="password"
            placeholder="Please Enter Your Password"
          />
        </div>
        <SignInOptions onClick={signInWithGoogle} />
      </form>
      <br />
      <hr className="line" />
      <div className="btns-div">
        <div className="left-btn-side">
          <br />
          <button className="btn-log" style={{ cursor: "pointer" }}>
            Login
          </button>
          <button className="create-acc">
            <Link className="create" to="/CreateAccount">
              Create Account
            </Link>
          </button>
        </div>
        <div className="right-btn-side">
          <br />
          <Link className="pass-reset" to="/forgotpassword">
            Forgot Password?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
