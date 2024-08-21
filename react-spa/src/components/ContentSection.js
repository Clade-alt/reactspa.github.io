import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title, description, id }) => {
  return (
    <section id={id} className="content-section">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Read More</button>
    </section>
  );
};

export default ContentSection;