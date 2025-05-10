import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-amber-700 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Informed</h2>
          <p className="text-amber-100 mb-8">
            Join our newsletter to get updates on our work, rescue stories, and ways you can help.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button 
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              <span className="mr-2">Subscribe</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
          
          {error && (
            <p className="mt-3 text-red-300 text-sm">{error}</p>
          )}
          
          {submitted && (
            <p className="mt-3 text-green-300">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;