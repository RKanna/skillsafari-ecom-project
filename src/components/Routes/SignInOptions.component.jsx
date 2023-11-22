import { signInWithGooglePopup } from "../../utils/index";
const SignInOptions = ({ onClick }) => {
  return (
    <div className="login-options">
      <button className="btn-login-option" onClick={onClick}>
        <i className="ri-google-fill"></i> Login with Google
      </button>

      <button className="btn-login-option">
        <i className="ri-facebook-box-fill"></i> Login with Facebook
      </button>
    </div>
  );
};

export default SignInOptions;
