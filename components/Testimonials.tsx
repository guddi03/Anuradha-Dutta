import React, { useState, useEffect, useMemo } from 'react';
import { TESTIMONIALS } from '../constants';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numTestimonials = TESTIMONIALS.length;
  const angle = 360 / numTestimonials;

  // Memoize radius calculation
  const radius = useMemo(() => {
    // A bit of trial and error for good visual spacing
    return numTestimonials > 4 ? 200 / Math.tan(Math.PI / numTestimonials) : 220;
  }, [numTestimonials]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numTestimonials);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [numTestimonials]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % numTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + numTestimonials) % numTestimonials);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0c0a1a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionTitle title="Client Testimonials" subtitle="Words from Those I've Guided" />
        </AnimatedSection>
        
        <div className="relative h-[250px] flex items-center justify-center">
            <div className="w-full perspective-1000">
                <div 
                    className="carousel-container preserve-3d transition-transform duration-1000 ease-in-out"
                    style={{ transform: `rotateY(${-currentIndex * angle}deg)` }}
                >
                    {TESTIMONIALS.map((testimonial, index) => {
                        const itemAngle = index * angle;
                        return (
                            <div 
                                key={index}
                                className="carousel-item p-6 bg-purple-900/30 backdrop-blur-md border border-purple-700/50 rounded-xl shadow-lg shadow-purple-900/30 flex flex-col justify-center text-center"
                                style={{
                                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`
                                }}
                            >
                                <p className="text-purple-200 italic mb-4">"{testimonial.quote}"</p>
                                <p className="font-bold text-yellow-400">- {testimonial.author}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button onClick={handlePrev} className="p-3 rounded-full bg-purple-800/50 hover:bg-purple-700/50 text-yellow-400 transition-colors" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={handleNext} className="p-3 rounded-full bg-purple-800/50 hover:bg-purple-700/50 text-yellow-400 transition-colors" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
