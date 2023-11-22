import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUser } from "./../context/UserContext.jsx";

const Navbar = () => {
  const { userEmail, displayName } = useUser();
  return (
    <section className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <Link className="logo-txt" to="/Home">
            <h1>GadgetMart</h1>
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/Menu">Menu</Link>

        {/* <Link to="/Login">Sign Up/Login</Link> */}
        {/* {isLoggedIn ? (
          <Link to="/userdashboard">Hello {userEmail}!</Link>
        ) : (
          <Link to="/login">Sign Up/Login</Link>
        )} */}

        {userEmail ? (
          <span className="userSpotlight">Hello {displayName}</span>
        ) : (
          <Link to="/Login">Sign Up/Login</Link>
        )}

        <ShoppingCartIcon className="cart" />
      </div>
    </section>
  );
};

export default Navbar;
