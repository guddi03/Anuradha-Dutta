import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 'delay-200' }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
