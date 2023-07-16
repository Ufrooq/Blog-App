import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div id="logo">
        <h2>Blogs.com</h2>
      </div>
      <div className="links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/create">
          Create Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
