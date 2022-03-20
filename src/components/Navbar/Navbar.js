import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.listElement}>
          <a href="#about" className={style.navlink}>
            about
          </a>
        </li>
        <li className={style.listElement}>
          <a href="#tech" className={style.navlink}>
            technologies
          </a>
        </li>
        <li className={style.listElement}>
          <a href="#projects" className={style.navlink}>
            projects
          </a>
        </li>

        <li className={style.listElement}>
          <a href="#contact" className={style.navlink}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
