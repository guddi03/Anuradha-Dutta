import React from 'react';
import { CONTACT_INFO } from '../constants';
import AnimatedSection from './AnimatedSection';

const MandalaSVG = () => (
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full object-cover opacity-10 animate-spin-slow -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#fde047', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity:1}} />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" stroke="url(#grad1)" strokeWidth="0.5" fill="none"/>
        <g transform="translate(50,50)">
            {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 30})`}>
                    <path d="M 0 -45 A 45 45 0 0 1 22.5 -38.97" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
                    <circle cx="0" cy="-35" r="3" stroke="url(#grad1)" strokeWidth="0.5" fill="none"/>
                </g>
            ))}
        </g>
    </svg>
);

const Hero: React.FC = () => {
    const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-b from-[#0c0a1a] via-[#1a0a2e] to-[#0c0a1a]">
      <div className="absolute inset-0 bg-cover bg-center opacity-500" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuvkMZhUZKuWWZ34reQ4DsD16k0MPRhPIDA&s')"}}></div>
      <MandalaSVG />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 p-6">
        <AnimatedSection>
            <img src="https://storage.googleapis.com/prompt-engineering-agent-submissions/prod/1b58525b-b9d9-4ca1-a3f2-8924f2b1c4e7/image.jpg" alt="Anuradha Dutta" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-yellow-400 shadow-lg shadow-yellow-500/20 object-cover"/>
        </AnimatedSection>
        <AnimatedSection delay="delay-300">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            {CONTACT_INFO.name}
            </h1>
        </AnimatedSection>
        <AnimatedSection delay="delay-500">
            <p className="text-lg md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            {CONTACT_INFO.tagline}
            </p>
        </AnimatedSection>
        <AnimatedSection delay="delay-700">
            <button onClick={handleScrollToContact} className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transform hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/30">
            Book a Consultation
            </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;