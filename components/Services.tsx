import React from 'react';
import { SERVICES } from '../constants';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <AnimatedSection delay={`delay-${index * 100}`}>
      <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-700/50 rounded-lg p-8 text-center h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-purple-500/40">
        {service.icon}
        <h3 className="font-playfair text-2xl font-bold text-yellow-400 mb-3">{service.title}</h3>
        <p className="text-purple-200">{service.description}</p>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <SectionTitle title="My Services" subtitle="Pathways to Clarity and Harmony" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
