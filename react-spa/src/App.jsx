import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  const services = [
    { name: 'Branding', description: 'We create strong and distinctive brands that resonate with your target audience.' },
    { name: 'Logo Design', description: 'Our team designs memorable logos that make a lasting impression.' },
    { name: 'Web Design', description: 'We build visually appealing and user-friendly websites tailored to your business needs.' },
    { name: 'Print Design', description: 'From brochures to business cards, we provide high-quality print design services.' },
  ];

  const portfolioProjects = [
    { name: 'Project Alpha', description: 'A complete branding package for a tech startup.' },
    { name: 'Project Beta', description: 'Web design and development for an e-commerce platform.' },
    { name: 'Project Gamma', description: 'Logo and print design for a local restaurant.' },
  ];

  const testimonials = [
    { name: 'John Doe', feedback: 'Drogon exceeded our expectations with their creative design solutions.' },
    { name: 'Jane Smith', feedback: 'Professional, timely, and outstanding quality. Highly recommend Drogon!' },
    { name: 'David Wilson', feedback: 'Their designs helped us stand out in a crowded market. Fantastic job!' },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <IntroSection />
      <ContentSection
        id="services"
        title="Our Services"
        description="We offer a range of graphic design services to help your business stand out."
        services={services}
      />
      <ContentSection
        id="portfolio"
        title="Our Portfolio"
        description="Explore our latest projects and see how we've helped businesses grow."
        portfolio={portfolioProjects}
      />
      <ContentSection
        id="testimonials"
        title="Client Testimonials"
        description="Hear from our satisfied clients who trust us with their design needs."
        testimonials={testimonials}
      />
      <ContentSection
        id="contact"
        title="Contact Us"
        description="Ready to get started? Contact us today to discuss your project."
      />
      <Footer />
    </div>
  );
}

export default App;