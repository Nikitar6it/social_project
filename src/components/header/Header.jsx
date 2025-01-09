import React from "react";
import logo from "./img/logo.svg"
import "./header.css"

function Header() {
  return (
    <div className="header">
      <img className="header__img" src={logo} alt="" />
    </div>
  )
}

export default Header