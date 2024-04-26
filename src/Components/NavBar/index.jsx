import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <img src={require("../../Images/logo.png")} alt="logo" className="w-36" />
      <div className="flex items-center justify-center">
        <NavLink className="">Home</NavLink>
        <NavLink className="ml-8">Flashcard</NavLink>
        <NavLink className="ml-8">Contact</NavLink>
        <NavLink className="ml-8">FAQ</NavLink>
        <button className="ml-8 px-8 py-1.5 text-white rounded-full bg-gradient-to-b from-blue-900 to-blue-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
