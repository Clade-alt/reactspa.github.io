import React from 'react';
import '../animations.css'; // Import the animations

const ContentSection = ({ title, description, id }) => {
  const contentStyle = {
    padding: '50px',
    backgroundColor: '#fff',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const fadeInUp = {
    animation: 'fadeInUp 1.5s ease',
  };

  const fadeInUpDelay = {
    animation: 'fadeInUp 1.5s ease 0.5s',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <section id={id} style={contentStyle}>
      <h3 style={fadeInUp}>{title}</h3>
      <p style={fadeInUpDelay}>{description}</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
      >
        Read More
      </button>
    </section>
  );
};

export default ContentSection;