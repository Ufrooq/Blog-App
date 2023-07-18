import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div id="logo">
        <Link to="/" style={{ textDecoration: "none", color: "#ff7979" }}>
          <h2>Blogs.com</h2>
        </Link>
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
