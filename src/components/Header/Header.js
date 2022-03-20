import React from "react";
import style from "./header.module.css";
import logo from "../../img/logo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={style.header}>
      <img className="logo" src={logo} alt="logo" />
      <Navbar />
    </header>
  );
};

export default Header;
