import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0c0a1a] to-[#1a1a2e] text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionTitle title="About Me" subtitle="My Journey and Philosophy" />
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="md:w-1/2" delay="delay-300">
            <img 
              src="https://photos.google.com/photo/AF1QipOdDN8BeiDuy-8g5MkXG4tS2t79jhx0xcUmaYid" 
              alt="Anuradha Dutta" 
              className="rounded-lg shadow-2xl shadow-purple-900/40 w-full object-cover h-[500px]"
            />
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2" delay="delay-500">
            <h3 className="font-playfair text-3xl font-bold text-yellow-400 mb-4">A Beacon of Spiritual Guidance</h3>
            <p className="text-purple-200 mb-4 leading-relaxed">
              With years of dedicated practice and profound knowledge in the mystical sciences, Anuradha Dutta has established herself as a trusted guide for those seeking direction and harmony in life. Her approach combines the timeless wisdom of ancient traditions with a compassionate understanding of modern challenges.
            </p>
            <p className="text-purple-200 mb-4 leading-relaxed">
              Based in Kolkata, she has helped countless individuals from all walks of life to navigate their paths, overcome obstacles, and unlock their true potential. Her philosophy is rooted in the belief that every individual possesses the power to create a positive reality, and her role is to illuminate the path towards that empowerment.
            </p>
            <p className="text-purple-200 leading-relaxed">
              Through astrology, Vaastu, and spiritual healing, she offers not just predictions, but practical remedies and a deeper connection to the cosmic energies that shape our existence.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;