
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideInFromLeft' | 'slideInFromRight';
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fadeIn',
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = {
    fadeIn: 'animate-fadeIn',
    slideUp: 'animate-slideUp',
    slideInFromLeft: 'animate-slideInFromLeft',
    slideInFromRight: 'animate-slideInFromRight',
  }[animation];

  const delayStyle = { animationDelay: `${delay}ms`, opacity: 0 };

  return (
    <div
      ref={sectionRef}
      className={cn(className, isVisible ? animationClass : '')}
      style={isVisible ? delayStyle : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
