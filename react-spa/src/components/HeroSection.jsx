import React from 'react';
import '../animations.css';

const HeroSection = () => {
  const heroStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const fadeIn = {
    animation: 'fadeIn 2s ease-in',
  };

  const fadeInDelay = {
    animation: 'fadeIn 2s ease-in 1s',
  };

  return (
    <section id="home" style={heroStyle}>
      <h1 style={fadeIn}>WELCOME TO DROGON DESIGN</h1>
      <p style={fadeInDelay}>Your journey to a seamless experience starts here.</p>
    </section>
  );
};

export default HeroSection;