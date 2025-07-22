import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Hero = ({ restaurant }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-primary min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo Hero */}
          <div className="flex justify-center mb-8">
            <div className="h-32 w-32 rounded-full bg-white border-4 border-yellow-400 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
              <span className="text-2xl font-bold text-black font-serif">Trip'</span>
              <span className="text-2xl font-bold text-black font-serif">Tik</span>
              <span className="text-xs text-gray-600 font-sans mt-1">RESTAURANT</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-black font-serif mb-6 leading-tight">
            {restaurant.name}
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-black/80 font-medium mb-8 font-sans">
            {restaurant.tagline}
          </p>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-sans">
              {restaurant.description}
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-primary-dark/50 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-dark/70 transition-all duration-300 transform hover:-translate-y-1">
              <MapPin className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black font-serif text-lg mb-2">Localisation</h3>
              <p className="text-black/70 font-sans">Saint-Pierre, Reunion Island</p>
            </div>
            
            <div className="bg-primary-dark/50 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-dark/70 transition-all duration-300 transform hover:-translate-y-1">
              <Clock className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black font-serif text-lg mb-2">Horaires</h3>
              <p className="text-black/70 font-sans text-sm">
                Mar - Ven: {restaurant.hours.weekdays}<br />
                Sam: {restaurant.hours.saturday}<br />
                <span className="text-xs">Fermé le {restaurant.hours.closed}</span>
              </p>
            </div>
            
            <div className="bg-primary-dark/50 backdrop-blur-sm rounded-lg p-6 hover:bg-primary-dark/70 transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="w-8 h-8 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-black font-serif text-lg mb-2">Réservation</h3>
              <p className="text-black/70 font-sans">{restaurant.phone}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="btn-primary bg-black text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Réserver une Table
            </button>
            <button
              onClick={() => document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary border-2 border-black text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Voir le Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;