import React from 'react';
import '../animations.css';

const ContentSection = ({ title, description, id, services, portfolio, testimonials }) => {
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

  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const boxStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <section id={id} style={contentStyle}>
      <h3 style={fadeInUp}>{title}</h3>
      <p style={fadeInUpDelay}>{description}</p>

      {services && (
        <div style={boxContainerStyle}>
          {services.map((service, index) => (
            <div key={index} style={boxStyle}>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <button
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      )}

      {portfolio && (
        <div style={boxContainerStyle}>
          {portfolio.map((project, index) => (
            <div key={index} style={boxStyle}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {testimonials && (
        <div style={boxContainerStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={boxStyle}>
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ContentSection;