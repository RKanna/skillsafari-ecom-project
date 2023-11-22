import "./App.css";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Routes/Footer.component";
import HeroBeforeLogin from "./components/Routes/Hero.component";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LoginPage from "./components/Routes/login.routes.component.jsx";
import PostLogin from "./components/Routes/PostLogin.component.jsx";
import Menu from "./components/Routes/Menu.component.jsx";
import CreateAccount from "./components/Routes/CreateAccount.Route.jsx";
import "./index.scss";
import { UserProvider } from "./context/UserContext.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <UserProvider>
        <Navbar />
        {children}
        <Footer />
      </UserProvider>
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
    element: (
      <Layout>
        <HeroBeforeLogin />
      </Layout>
    ),
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
    element: (
      <Layout>
        <HeroBeforeLogin />
      </Layout>
    ),
  },
  {
    path: "/PostLogin",
    element: (
      <Layout>
        <PostLogin />
      </Layout>
    ),
  },
  {
    path: "/CreateAccount",
    element: (
      <Layout>
        <CreateAccount />
      </Layout>
    ),
  },
  {
    path: "/userdashboard",
    element: (
      <Layout>
        <PostLogin />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <main>{/* <Route path="/" element={<HeroBeforeLogin />} /> */}</main>
    </RouterProvider>
  );
}

export default App;
