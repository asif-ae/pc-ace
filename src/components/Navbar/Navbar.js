import React from "react";
import NavbarStyles from "./Navbar.module.css";
const { color } = NavbarStyles;
const Navbar = () => {
  return (
    <div className={`${color} text-center`}>
      <div className="">
        <h3 className="">Cart</h3>
        <img className="" src="" alt="" />
        <div className="">1</div>
      </div>
    </div>
  );
};

export default Navbar;
