import React from "react";
import "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar-logo">Redux Shopping Cart</h2>
      </Link>
      <Link to="/">
        <div className="navbar-cart">
          <h3 className="cart-title">Cart</h3>
          <img className="cart-image" src="" alt="shopping cart" />
          <div className="cart-counter">1</div>
        </div>
      </Link>
      <Link className="nav-link active" to="/"></Link>
      <button class="btn" type="login">
        Login
      </button>
    </div>
  );
};

export default Navbar;
