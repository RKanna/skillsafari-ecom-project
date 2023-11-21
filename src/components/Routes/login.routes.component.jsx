import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SignInOptions from "./SignInOptions.component";
import TopLayout from "../TopLayout.component";
// import { auth } from "./firebase.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      // Handle successful authentication, e.g., redirect to private page
      console.log(result.user);
      // You can use react-router-dom or any other method to redirect to private.jsx
    } catch (error) {
      // Handle errors
      console.error(error);
    }
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
        <SignInOptions />
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
