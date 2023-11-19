import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Routes/login.routes.component.jsx";
import PostLogin from "./components/Routes/PostLogin.component.jsx";
import Navbar from "./components/Navbar.component.jsx";
import Footer from "./components/Routes/Footer.component.jsx";
import Menu from "./components/Routes/Menu.component.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/menu",
    element: (
      <Layout>
        <Menu />
      </Layout>
    ),
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SignUp",
    element: <h1>Success Sign Up</h1>,
  },
  {
    path: "/Login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/PostLogin",
    element: <PostLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
