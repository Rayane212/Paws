import React, { useState } from 'react';
import { Copy, Check, Rocket, TrendingUp, Users } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = '7UbVw3Y3tpaGBohPbr8ahUtGXMe8c71T6fAeAu82pump'; // Replace with actual contract address
  const displayAddress = `${fullAddress.slice(0, 6)}...${fullAddress.slice(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="donation-section" 
      className="py-20 bg-gradient-to-b from-amber-50 to-amber-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🚀 Now accepting $PAWSCOIN
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

          {/* Contract Address */}
          <div className="mb-12">
            <p className="text-sm text-gray-600 mb-2">$PAWSCOIN Contract Address</p>
            <div 
              onClick={copyToClipboard}
              className="wallet-address flex items-center justify-center space-x-2 bg-white border-2 border-amber-200 rounded-lg py-4 px-6 max-w-md mx-auto cursor-pointer"
            >
              <span className="text-xl font-mono">{displayAddress}</span>
              {copied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5 text-amber-700" />
              )}
            </div>
            {copied && (
              <p className="text-green-600 mt-2 text-sm">Contract address copied!</p>
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

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://pump.fun/7UbVw3Y3tpaGBohPbr8ahUtGXMe8c71T6fAeAu82pump" // Modify this link to the actual purchase link
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:transform hover:scale-105"
            >
              Buy on Pump.fun
            </a>
            <a 
              href="#" 
              className="bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:transform hover:scale-105"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;