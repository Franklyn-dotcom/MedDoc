import React from "react";
import icon from "../assets/icon.svg";
import buttonIcon from "../assets/buttonIcon.svg";
import { NavLink } from "react-router-dom";
import "../index.css";
import "../App.css";

export const Header = () => {
  return (
    <div>

    <div className="flex flex-col items-center justify-center">
      <div className="flex p-[40px] justify-between w-full">
        <div className="flex items-center">
          <img src={icon} alt="Logo" />
          <h1 className="ml-2">MedDoc</h1>
        </div>
        <div className="flex space-x-10 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Features">Features</NavLink>
          <NavLink to="/sign-up">
            <button className="flex items-center">
              <img src={buttonIcon} alt="" className="mr-2" />
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
      <hr />
    </div>
  );
};

export default Header;
