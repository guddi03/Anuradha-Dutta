import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1593963625016-59e5a1b3c2e8?q=80&w=2070&auto=format&fit=crop', alt: 'Astrology chart and crystals' },
    { src: 'https://images.unsplash.com/photo-1600172454235-866941147a02?q=80&w=1974&auto=format&fit=crop', alt: 'Vaastu yantra diagram' },
    { src: 'https://images.unsplash.com/photo-1558371232-1f4a47986c1c?q=80&w=2070&auto=format&fit=crop', alt: 'Spiritual healing session with candles' },
    { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop', alt: 'Person meditating in a serene environment' },
    { src: 'https://images.unsplash.com/photo-1598448375371-7296a241b123?q=80&w=2070&auto=format&fit=crop', alt: 'Singing bowls for sound healing' },
    { src: 'https://images.unsplash.com/photo-1575482860499-6f658fd12828?q=80&w=2070&auto=format&fit=crop', alt: 'Collection of various healing crystals' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <SectionTitle title="Glimpses of the Divine" subtitle="A Visual Journey into Spiritual Harmony" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={`delay-${(index % 3) * 150}`}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg shadow-purple-900/40 border-2 border-purple-700/50">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-end p-6">
                        <p className="text-white font-playfair text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                            {image.alt}
                        </p>
                    </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;