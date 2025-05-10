import React from 'react';
import { ArrowRight } from 'lucide-react';

const RescueStories: React.FC = () => {
  const features = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg',
      title: 'Community Driven',
      description: 'Join a passionate community of cat lovers and crypto enthusiasts united for a noble cause.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg',
      title: 'Real Impact',
      description: 'Every transaction contributes to our mission of protecting cats from abuse and neglect.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg',
      title: 'Transparent Operations',
      description: 'Track your impact with our transparent reporting system and regular community updates.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Why Choose $PAWSCOIN?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          More than just a meme coin - we're building a movement to protect cats worldwide
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="story-card bg-amber-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#donation-section" 
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Join the Whitelist
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RescueStories;