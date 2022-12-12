import React from "react";
import Link from "react";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <a href="" className="header__nav-item">
          Home
        </a>
        <a href="" className="header__nav-item">
          Pages
        </a>
        <a href="" className="header__nav-item">
          Services
        </a>
        <a href="" className="header__nav-item">
          Case Study
        </a>
        <a href="" className="header__nav-item">
          Blog
        </a>
        <a href="" className="header__nav-item">
          Contact
        </a>
        <button>Get a Quote</button>
      </nav>
      <div className="container">
        <div className="slider">
          <div className="slider__text">
          <h1>Big Opportunity For Your Business</h1>
          <button>Out Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
