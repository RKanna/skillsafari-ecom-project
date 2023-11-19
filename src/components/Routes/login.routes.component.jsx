import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
      <div>
        <form action="">
          <h1>Create a New Account</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <div>
            <label htmlFor="pass">Password</label>
            <input type="text" id="pass" />
          </div>
          <div>
            <label htmlFor="cnf-pass">Confirm Password</label>
            <input type="text" id="cnf-pass" />
          </div>
        </form>
      </div>
      <div className="login">
        <div className="flexrow">
          <h2>Username</h2>
          <input
            type="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flexrow">
          <h2>Password</h2>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <button>
          <Link to="/Home" className="link">
            Back to Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
