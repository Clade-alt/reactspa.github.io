import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <div className="App" style={appStyle}>
      <Header />
      <HeroSection />
      <IntroSection />
      <ContentSection
        id="section1"
        title="Section 1"
        description="This is the first content section with a brief description."
      />
      <ContentSection
        id="section2"
        title="Section 2"
        description="This is the second content section with a brief description."
      />
      <ContentSection
        id="section3"
        title="Section 3"
        description="This is the third content section with a brief description."
      />
      <Footer />
    </div>
  );
}

export default App;