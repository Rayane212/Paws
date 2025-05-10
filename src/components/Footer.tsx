import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import ResourceSection from './ResourceSection';

const Footer: React.FC = () => {
  return (
    <footer>
      <ResourceSection />
      <NewsletterSignup />
      
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Cat className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Cat Protectors</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/impact" className="text-gray-400 hover:text-white transition-colors">Impact</Link></li>
                <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li><Link to="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
                <li><Link to="/foster" className="text-gray-400 hover:text-white transition-colors">Foster</Link></li>
                <li><Link to="/adopt" className="text-gray-400 hover:text-white transition-colors">Adopt</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                <li><Link to="/report" className="text-gray-400 hover:text-white transition-colors">Report Abuse</Link></li>
                <li><Link to="/laws" className="text-gray-400 hover:text-white transition-colors">Animal Laws</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Protection Ave</li>
                <li className="text-gray-400">New York, NY 10001</li>
                <li className="text-gray-400">info@catprotectors.org</li>
                <li className="text-gray-400">(212) 555-CATS</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Cat Protectors. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;