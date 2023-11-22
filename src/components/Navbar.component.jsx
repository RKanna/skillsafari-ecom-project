import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
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
        <Link to="/Login">Sign Up/Login</Link>

        <ShoppingCartIcon className="cart" />
      </div>
    </section>
  );
};

export default Navbar;
