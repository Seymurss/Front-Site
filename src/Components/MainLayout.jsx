// MainLayout.jsx
import React, { useRef } from 'react';
import BackgroundQrid from './BackgroundQrid';
import Topbar from './Topbar';
import Header from './Header';
import Services from './Services';
import Awards from './Awards';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const MainLayout = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <BackgroundQrid />
      <Topbar />
      <div ref={homeRef}>
         <Header />
      </div>

        <Services
          onScroll={scrollToSection}
          refs={{ homeRef , aboutRef, servicesRef, portfolioRef, contactRef }}
        />

      <div ref={aboutRef}>
        <Awards /> {/* Tutaq ki 'About' bura düşür */}
      </div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

