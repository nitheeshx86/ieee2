import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.webp" alt="logo" className="navbar-logo" />
        <span className="navbar-title">IEEE CS</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#apply">Apply</a></li>
        <li><a href="#works">Works</a></li>
      </ul>
    </nav>
  );
}