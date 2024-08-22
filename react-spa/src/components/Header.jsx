import React from 'react';
import '../animations.css'; 

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#310',
    color: '#fff',
    letterSpacing: '5px',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '50px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 'regular',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;