import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Routes/Footer.component";
import HeroBeforeLogin from "./components/Routes/Hero.component";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <HeroBeforeLogin />
        <Footer />
      </main>
    </>
  );
}

export default App;
