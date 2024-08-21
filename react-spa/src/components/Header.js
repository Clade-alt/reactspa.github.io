import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My SPA Website</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;