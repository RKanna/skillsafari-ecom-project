import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import SignInOptions from "./SignInOptions.component";
import TopLayout from "../TopLayout.component";
//firebase login functions
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/index.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";

const LoginPage = () => {
  const { setUser } = useUser();
  const [loginVariable, setLoginVariable] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signInWithGoogle = async (event) => {
    event.preventDefault();

    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setUser(user.email);

    navigate("/userdashboard");
  };

  return (
    <section className="for-flex">
      <TopLayout content={"Login"} />
      <br />
      <form>
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
        {/* <SignInOptions onClick={signInWithGoogle} /> */}
        <div className="login-options">
          <button className="btn-login-option" onClick={signInWithGoogle}>
            <i className="ri-google-fill"></i> Login with Google
          </button>

          <button className="btn-login-option">
            <i className="ri-facebook-box-fill"></i> Login with Facebook
          </button>
        </div>
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
