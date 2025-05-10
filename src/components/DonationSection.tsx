import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = '9FABC12...FELINE88';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="donation-section" 
      className="py-20 bg-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            SUPPORT THIS CAUSE WITH SOLANA
          </h2>
          <p className="text-xl mb-4">
            Buy SOL if you support this cause
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Show your support by sending SOL to help raise awareness, fund our actions, 
            and fight feline abuse.
          </p>

          {/* Wallet Address */}
          <div className="mb-12">
            <div 
              onClick={copyToClipboard}
              className="wallet-address flex items-center justify-center space-x-2 bg-amber-100 border border-amber-200 rounded-lg py-4 px-6 max-w-md mx-auto cursor-pointer"
            >
              <span className="text-xl font-mono">{walletAddress}</span>
              {copied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5 text-amber-700" />
              )}
            </div>
            {copied && (
              <p className="text-green-600 mt-2 text-sm">Wallet address copied!</p>
            )}
          </div>

          <p className="text-lg mb-12">
            Every SOL sent helps strengthen our mission. Let's make a real impact — together.
          </p>

          {/* Additional donation options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Monthly Support', 'One-Time Donation', 'Corporate Giving'].map((option) => (
              <div 
                key={option}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-800">{option}</h3>
                <p className="text-gray-700 mb-4">
                  {option === 'Monthly Support'
                    ? 'Provide ongoing support to help us plan long-term initiatives.'
                    : option === 'One-Time Donation'
                    ? 'Make an immediate impact with a one-time contribution.'
                    : 'Partner with us to show your company\'s commitment to animal welfare.'}
                </p>
                <button className="text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;