import React from 'react';

interface RescueStory {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const RescueStories: React.FC = () => {
  const stories: RescueStory[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg',
      date: 'APR 20, 2024',
      title: 'Whiskers Found in Abandoned Building',
      excerpt: 'Rescued from a condemned building in Brooklyn, Whiskers is now safe and receiving care.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg',
      date: 'APR 15, 2024',
      title: 'Ginger Saved from Neglect',
      excerpt: 'After being severely neglected, Ginger is now recovering in a loving foster home.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg',
      date: 'APR 2, 2024',
      title: 'Shadow Rescued from Abusive Home',
      excerpt: 'Following a tip from a concerned neighbor, Shadow was removed from a dangerous situation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Recent Rescues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="story-card bg-amber-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="text-amber-800 font-semibold mb-2">
                  {story.date}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {story.excerpt}
                </p>
                <button className="text-red-700 font-semibold hover:text-red-800 transition-colors">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default RescueStories;