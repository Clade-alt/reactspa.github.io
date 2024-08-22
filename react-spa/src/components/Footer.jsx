import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My SPA Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;