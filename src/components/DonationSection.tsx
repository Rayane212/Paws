import React, { useState, useEffect } from 'react';
import { Copy, Check, Rocket, TrendingUp, Users, Timer } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section 
      id="donation-section" 
      className="py-20 bg-gradient-to-b from-amber-50 to-amber-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🚀 Whitelist Registration Open
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Launch Countdown</h2>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map(({ label, value }) => (
                <div key={label} className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-3xl font-bold text-amber-600">{value}</div>
                  <div className="text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            JOIN THE $PAWSCOIN REVOLUTION
          </h2>
          <p className="text-xl mb-4 text-amber-800">
            The first meme coin dedicated to fighting cat abuse
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-700">
            $PAWSCOIN isn't just another meme coin - it's a movement. Every transaction contributes to our mission 
            of protecting cats and fighting abuse. Join our growing community of cat lovers and crypto enthusiasts.
          </p>

          {/* Whitelist Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Join the Whitelist</h3>
            <p className="text-gray-600 mb-6">Get early access and exclusive benefits</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition-all hover:transform hover:scale-105"
              >
                Reserve Your Spot
              </button>
            </form>
            {submitted && (
              <p className="text-green-600 mt-4">You're on the list! 🎉</p>
            )}
          </div>

          {/* Tokenomics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-amber-800">Tokenomics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">Community Driven</h4>
                <p className="text-gray-600">80% of tokens distributed to the community</p>
              </div>
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">2% Charity Wallet</h4>
                <p className="text-gray-600">Direct support for cat protection initiatives</p>
              </div>
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <Rocket className="h-10 w-10 text-amber-600" />
                </div>
                <h4 className="font-bold mb-2">1% Burn Rate</h4>
                <p className="text-gray-600">Increasing scarcity with every transaction</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-amber-100">Telegram Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-amber-100">Twitter Followers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8K+</div>
                <div className="text-amber-100">Whitelist Sign-ups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;