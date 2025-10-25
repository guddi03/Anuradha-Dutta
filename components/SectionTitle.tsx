import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
        {title}
      </h2>
      <p className="text-lg text-purple-200 mb-4">{subtitle}</p>
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-yellow-400 rounded-full animate-glow"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
