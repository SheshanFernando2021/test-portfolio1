import React from 'react';
import './navbar.css';
import menu from '../../assets/dropdownmenu.svg';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className='desktopVersion'>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
        <li><a href="#arcade">Arcade</a></li>
      </ul>
      <div className='mobileVersion'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
        <li><a href="#arcade">Arcade</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
