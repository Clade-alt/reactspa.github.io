import Header from './components/Header';
import ParallaxSection from './components/ParallaxSection';
import IntroSection from './components/IntroSection';
import ArtSection from './components/ArtSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialSection';
import { ReactLenis} from 'lenis/react';

function App() {
  return (
    <div className="App">
      <ReactLenis root>
      <Header />
      <ParallaxSection />
      <IntroSection />
      <ArtSection/>
      <ServiceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;