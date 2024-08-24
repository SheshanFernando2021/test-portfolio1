import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
        <li><a href="#arcade">Arcade</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
