import Header from './components/Header';
import ParallaxSection from './components/ParallaxSection';
import IntroSection from './components/IntroSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialSection';
import { ReactLenis, useLenis } from 'lenis/react';

function App() {
  return (
    <div className="App">
      <ReactLenis root>
      <Header />
      <ParallaxSection />
      <IntroSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;