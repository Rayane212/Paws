import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAction = () => {
    document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative h-screen flex items-center justify-center text-center text-white">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          STOP CAT ABUSE
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Abused cats suffer terrible acts of cruelty, especially in New York. 
          Let's unite and protect them.
        </p>
        <button 
          onClick={scrollToAction}
          className="cta-button bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-md text-xl font-bold inline-flex items-center"
        >
          ACT NOW
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;