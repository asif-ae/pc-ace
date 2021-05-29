import React, { Fragment } from "react";
import "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-style"
        style={{ color: "navy" }}
      >
        <div className="container-fluid d-flex align-items-center">
          <Link className="navbar-brand text-uppercase" to="/">
            PC Ace
          </Link>
          <button
            className="navbar-toggler menu-button-styles"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faEllipsisV} className="menu-icon-styles" />
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav align-items-center justify-content-end w-100">
              <div className="pe-3 d-none d-lg-block">
                <Link className="nav-link text-uppercase" to="/">
                  Home
                </Link>
              </div>
              <div className="py-3 d-lg-none">
                <Link className="nav-link text-uppercase" to="/">
                  Home
                </Link>
              </div>
              <Link className="nav-link text-uppercase" to="/cart">
                <span className="bg-white py-2 px-3 rounded-pill cart-items-amount">
                  <span className="px-1">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="cart-icon-styles"
                    />
                  </span>
                  &nbsp;<span className="px-1">1</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
