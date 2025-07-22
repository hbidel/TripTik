import React from 'react';
import { MapPin, Phone, Mail, Clock, Wine, Heart, Instagram } from 'lucide-react';

const Footer = ({ restaurant }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wine className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold font-serif">{restaurant.name}</h3>
            </div>
            <p className="text-gray-300 font-sans leading-relaxed">
              Bistro moderne au cœur de la Réunion, alliant tradition parisienne et touches contemporaines.
            </p>
            <p className="text-sm text-gray-400 font-sans">
              {restaurant.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 font-sans">{restaurant.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 font-sans">{restaurant.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 font-sans">{restaurant.email}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Horaires</h4>
            <div className="space-y-2 text-sm text-gray-300 font-sans">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mar - Ven: {restaurant.hours.weekdays}</p>
                  <p>Sam: {restaurant.hours.saturday}</p>
                  <p className="text-red-400">Fermé le {restaurant.hours.closed}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif">Navigation</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('#home')}
                className="block text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-sans"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="block text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-sans"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('#menu')}
                className="block text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-sans"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('#gallery')}
                className="block text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-sans"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-sans"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-sans">
              <span>© 2024 {restaurant.name}. Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400 font-sans">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>à {restaurant.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;