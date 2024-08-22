import React from 'react';
import '../animations.css'; // Import the animations

const IntroSection = () => {
  const introStyle = {
    padding: '50px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  };

  const slideIn = {
    animation: 'slideIn 1.5s ease-in-out',
  };

  const slideInDelay = {
    animation: 'slideIn 1.5s ease-in-out 0.5s',
  };

  return (
    <section style={introStyle}>
      <h2 style={slideIn}>About This Site</h2>
      <p style={slideInDelay}>This is a single-page application demonstrating React basics and UI/UX design.</p>
    </section>
  );
};

export default IntroSection;