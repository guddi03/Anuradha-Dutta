import React, { useState, useEffect, useRef } from 'react';

export const useOnScreen = <T extends Element,>(options?: IntersectionObserverInit & { triggerOnce?: boolean }): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
        }
      } else {
        if (!options?.triggerOnce) {
            setIsVisible(false);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};
