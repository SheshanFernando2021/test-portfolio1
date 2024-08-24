import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import menu from '../../assets/dropdownmenu.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <ul className='desktopVersion'>
        <li><a href="#">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
        <li><a href="#arcade">Arcade</a></li>
      </ul>
      <div className='mobileVersion' ref={menuRef}>
        <img src={menu} alt='Menu' onClick={toggleMenu} />
        <ul className={`menuList ${menuOpen ? 'show' : ''}`}>
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
