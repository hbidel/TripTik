import React, { useState } from 'react';
import { Wine, Utensils, Coffee } from 'lucide-react';

const Menu = ({ categories, wines }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showWines, setShowWines] = useState(false);

  const getCategoryIcon = (index) => {
    const icons = [Utensils, Utensils, Coffee, Utensils];
    const IconComponent = icons[index] || Utensils;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <section id="menu" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
            Notre Menu
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Une cuisine française authentique avec des influences créoles, 
            préparée avec passion et des ingrédients locaux de qualité.
          </p>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(index);
                setShowWines(false);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === index && !showWines
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white/80 text-black hover:bg-white'
              }`}
            >
              {getCategoryIcon(index)}
              <span>{category.name}</span>
            </button>
          ))}
          <button
            onClick={() => setShowWines(true)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
              showWines
                ? 'bg-black text-white shadow-lg'
                : 'bg-white/80 text-black hover:bg-white'
            }`}
          >
            <Wine className="w-5 h-5" />
            <span>Vins</span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          {!showWines ? (
            // Food Menu
            <div>
              <h3 className="text-3xl font-bold text-black font-serif mb-8 text-center">
                {categories[activeCategory]?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories[activeCategory]?.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-primary-dark/20 rounded-lg hover:bg-primary-dark/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-black font-serif">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-black bg-primary-dark/50 px-3 py-1 rounded-md ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-700 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Wine Menu
            <div>
              <h3 className="text-3xl font-bold text-black font-serif mb-8 text-center">
                Sélection de Vins
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wines.map((wine) => (
                  <div
                    key={wine.id}
                    className="p-6 bg-primary-dark/20 rounded-lg hover:bg-primary-dark/30 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <Wine className="w-12 h-12 text-black" />
                    </div>
                    <h4 className="text-xl font-semibold text-black font-serif mb-2">
                      {wine.name}
                    </h4>
                    <span className="inline-block bg-black text-white px-3 py-1 rounded-md text-sm font-semibold mb-3">
                      {wine.type}
                    </span>
                    <p className="text-gray-700 font-sans leading-relaxed mb-4">
                      {wine.description}
                    </p>
                    <div className="text-lg font-bold text-black bg-primary-dark/50 inline-block px-4 py-2 rounded-md">
                      {wine.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-black/70 font-sans mb-6">
            Tous nos plats sont préparés avec des ingrédients frais et locaux
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Réserver pour Déguster
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;