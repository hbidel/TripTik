import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-md">
                <span className="text-xs font-bold text-black font-serif">T'T</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-serif">Trip'Tik</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-cream hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Reservation Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-gold-light transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Réserver
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream hover:text-gold p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-cream hover:text-gold px-3 py-2 text-base font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full text-left bg-gold text-black px-3 py-2 rounded-md font-semibold hover:bg-gold-light transition-colors duration-200 mt-4"
            >
              Réserver
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;