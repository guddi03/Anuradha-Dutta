import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-[#0c0a1a] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Chatbot />
    </div>
  );
}

export default App;