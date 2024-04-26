import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-5 sm:flex-col md:flex-row xs:items-start">
      <img
        src={require("../../Images/logo.png")}
        alt="logo"
        className="w-36 sm:mb-5 "
      />
      <div className="flex items-center justify-center xs:flex-col xs:items-start">
        <NavLink className="xs:text-lg xs:my-1">Home</NavLink>
        <NavLink className="ml-8 xs:ml-0 xs:my-1 xs:text-lg">Flashcard</NavLink>
        <NavLink className="ml-8 xs:ml-0 xs:my-1 xs:text-lg">Contact</NavLink>
        <NavLink className="ml-8 xs:ml-0 xs:my-1 xs:text-lg">FAQ</NavLink>
        <button className="ml-8 xs:ml-0 xs:my-1 xs:text-lg px-8 py-1.5 text-white rounded-full bg-gradient-to-b from-blue-900 to-blue-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
