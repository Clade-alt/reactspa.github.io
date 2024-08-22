import React from 'react';
import '../animations.css'; // Import the animations

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
  };

  return (
    <header style={headerStyle}>
      <h1>DROGON DESIGN</h1>
      <nav>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;