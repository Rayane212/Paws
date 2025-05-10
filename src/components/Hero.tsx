import React from 'react';
import { ArrowRight, Timer } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAction = () => {
    document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="inline-flex items-center bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Timer className="w-5 h-5 mr-2" />
          <span className="text-amber-200 font-semibold">Launch Coming Soon</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          $PAWSCOIN
          <span className="block text-2xl md:text-3xl text-amber-400 mt-4">
            The First Meme Coin Fighting Cat Abuse
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed text-gray-200">
          Join the revolution. Every transaction helps protect cats from abuse.
          Be part of something bigger than just another meme coin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAction}
            className="cta-button bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md text-xl font-bold inline-flex items-center"
          >
            Join Whitelist
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <div className="text-amber-200 font-semibold">
            <span className="mr-2">🚀</span>
            {Math.floor(Math.random() * 2000 + 8000)} people already joined
          </div>
        </div>
      </div>
      
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