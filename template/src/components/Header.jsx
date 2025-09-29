import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="Main-heading">Louis Vuitton</h1>
      <nav className="header__nav">
        <a  className="header-link">Collections</a>
        <a className="header-link">Dedication</a>
        <a className="header-link">Products</a>
        <img className="user-logo" src="./src/assets/user.png" alt="user-logo"/>
        <img classNanme="bag-logo" src="./src/assets/shopping-bag.png" alt="cart-logo"/>
      </nav>
    </header>
  );
}