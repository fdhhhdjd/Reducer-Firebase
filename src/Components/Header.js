import React from "react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./GetstoreFB/ToggleTheme";

const Header = () => {
  return (
    <div className="container-fluid ">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "rgb(120, 120, 120)" }}
      >
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Home
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          Add
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          About
        </NavLink>
        <NavLink to="/receive" className="btn" style={{ color: "white" }}>
          receive
        </NavLink>
        <NavLink to="/instagram" className="btn" style={{ color: "white" }}>
          FeedBack
        </NavLink>
        <div className="btn" style={{ color: "white" }}>
          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
};

export default Header;
