import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <h1>logo here</h1>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/Menu">Home</Link>
        <Link to="/Login">Sign Up/Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
};

export default Navbar;
