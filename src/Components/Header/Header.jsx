import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src='https://s1.logaster.com/static/v3/img/products/logo.png'
        alt=''
      />
    </header>
  );
}

export default Header;
