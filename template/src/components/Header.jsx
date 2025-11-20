import React from "react";
import userLogo from "../assets/user.png";
import bagLogo from "../assets/shopping-bag.png";

export default function Header() {
  return (
    <header className="header">
      <h1 className="Main-heading">Louis Vuitton</h1>
      <nav className="header__nav">
        <a className="header-link">Collections</a>
        <a className="header-link">Dedication</a>
        <a className="header-link">Products</a>

        <img className="user-logo" src={userLogo} alt="user-logo" />
        <img className="bag-logo" src={bagLogo} alt="cart-logo" />
      </nav>
    </header>
  );
}
