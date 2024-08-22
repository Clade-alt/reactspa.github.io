import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

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

      <Parallax pages={5} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.25}>
        <div class="animation_layer parallax" id="artback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div class="animation_layer parallax" id="mountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div class="animation_layer parallax" id="logoland"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div class="animation_layer parallax" id="jungle1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div class="animation_layer parallax" id="jungle2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div class="animation_layer parallax" id="jungle3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <div class="animation_layer parallax" id="jungle4"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.40}>
        <div class="animation_layer parallax" id="manonmountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div class="animation_layer parallax" id="jungle5"></div>
      </ParallaxLayer>
    
      <ParallaxLayer offset={0} speed={0.2}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <HeroSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} factor={1}>
          <IntroSection />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
        <div style={{ height: '50vh', backgroundColor: '#fff' }}>
          <ContentSection
            id="services"
            title="Our Services"
            description="We offer a range of graphic design services to help your business stand out."
            services={services}
          />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.6}>
          <ContentSection
            id="portfolio"
            title="Our Portfolio"
            description="Explore our latest projects and see how we've helped businesses grow."
            portfolio={portfolioProjects}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.7}>
          <ContentSection
            id="testimonials"
            title="Client Testimonials"
            description="Hear from our satisfied clients who trust us with their design needs."
            testimonials={testimonials}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.8}>
          <Footer />
        </ParallaxLayer>
    </Parallax>  
    </div>
  );
}

export default App;