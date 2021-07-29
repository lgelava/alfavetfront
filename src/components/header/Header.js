import React from "react";
import Logo from "../../media/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="ვეტერინარული კლინიკა ალფა" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
