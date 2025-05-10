import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cat, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Cat className={`h-8 w-8 ${isScrolled ? 'text-amber-700' : 'text-white'}`} />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-amber-700' : 'text-white'}`}>
            Cat Protectors
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Donate', 'Report Abuse', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium hover:text-amber-500 transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <ul className="container mx-auto px-4 space-y-3">
            {['Home', 'About', 'Donate', 'Report Abuse', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-gray-800 hover:text-amber-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;