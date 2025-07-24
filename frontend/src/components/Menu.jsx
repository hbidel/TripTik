import React, { useState } from 'react';
import { Wine, Utensils, Coffee } from 'lucide-react';

const Menu = ({ categories, wines }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showWines, setShowWines] = useState(false);

  // Images mapping for dishes
  const dishImages = {
    'Tataki De Thon': 'https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHx0dW5hJTIwdGF0YWtpfGVufDB8fHx8MTc1MzM4MTM2NHww&ixlib=rb-4.1.0&q=85',
    'Quiche Lorraine Déstructurée': 'https://images.unsplash.com/photo-1650844010413-3f24dc1c182b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxxdWljaGUlMjBsb3JyYWluZXxlbnwwfHx8fDE3NTMzODEzNzJ8MA&ixlib=rb-4.1.0&q=85',
    'Patate Douce Façon Gemüse': 'https://images.unsplash.com/photo-1663623483427-3d9b5d35cc61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8fHwxNzUzMzgxMzQ5fDA&ixlib=rb-4.1.0&q=85',
    'Poireaux Vinaigrette': 'https://images.unsplash.com/photo-1689997065743-7585a0a9e2fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8fHwxNzUzMzgxMzQ5fDA&ixlib=rb-4.1.0&q=85',
    'Z\'escargots Du Tampon': 'https://images.unsplash.com/photo-1731156693854-3a9363878240?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBiaXN0cm8lMjBkaXNoZXN8ZW58MHx8fHwxNzUzMzgxMzM5fDA&ixlib=rb-4.1.0&q=85',
    'Magret De Canard': 'https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxkdWNrJTIwYnJlYXN0fGVufDB8fHx8MTc1MzM4MTM1Nnww&ixlib=rb-4.1.0&q=85',
    'Cordon Bleu': 'https://images.unsplash.com/photo-1580554530778-ca36943938b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxkdWNrJTIwYnJlYXN0fGVufDB8fHx8MTc1MzM4MTM1Nnww&ixlib=rb-4.1.0&q=85',
    'Pièce Du Boucher': 'https://images.unsplash.com/photo-1692197275441-40c874f40385?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8fHwxNzUzMzgxMzQ5fDA&ixlib=rb-4.1.0&q=85',
    'Poulpe Grillé': 'https://images.unsplash.com/photo-1526243070121-8040f7c9cc1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwb2N0b3B1c3xlbnwwfHx8fDE3NTMzODEzODV8MA&ixlib=rb-4.1.0&q=85',
    'Pavé De Daurade': 'https://images.unsplash.com/photo-1619810816513-2484647eef43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxncmlsbGVkJTIwb2N0b3B1c3xlbnwwfHx8fDE3NTMzODEzODV8MA&ixlib=rb-4.1.0&q=85',
    'Risotto Pesto': 'https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyaXNvdHRvfGVufDB8fHx8MTc1MzM4MTQwMXww&ixlib=rb-4.1.0&q=85',
    'Ananas Rôti': 'https://images.unsplash.com/photo-1456014673271-90b7fddf2eea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxxdWljaGUlMjBsb3JyYWluZXxlbnwwfHx8fDE3NTMzODEzNzJ8MA&ixlib=rb-4.1.0&q=85',
    'Brownie Chocolat': 'https://images.unsplash.com/photo-1612078960206-1709f1f0c969?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBicm93bmllfGVufDB8fHx8MTc1MzM4MTM3OHww&ixlib=rb-4.1.0&q=85',
    'Crème Brulée Du Moment': 'https://images.unsplash.com/photo-1727178757756-8d2accd05082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxxdWljaGUlMjBsb3JyYWluZXxlbnwwfHx8fDE3NTMzODEzNzJ8MA&ixlib=rb-4.1.0&q=85',
    'Moelleux Chocolat': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjaG9jb2xhdGUlMjBicm93bmllfGVufDB8fHx8MTc1MzM4MTM3OHww&ixlib=rb-4.1.0&q=85',
    'Café Ou Thé Gourmand': 'https://images.unsplash.com/photo-1589218436045-ee320057f443?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjaG9jb2xhdGUlMjBicm93bmllfGVufDB8fHx8MTc1MzM4MTM3OHww&ixlib=rb-4.1.0&q=85',
    'Dégustation De Fromage': 'https://images.unsplash.com/photo-1682428617976-f25633ed8469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxyaXNvdHRvfGVufDB8fHx8MTc1MzM4MTQwMXww&ixlib=rb-4.1.0&q=85',
    'Menu Enfant': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxyaXNvdHRvfGVufDB8fHx8MTc1MzM4MTQwMXww&ixlib=rb-4.1.0&q=85'
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Notre Menu
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed font-sans">
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
                  ? 'bg-gold text-black shadow-lg'
                  : 'bg-white/10 text-cream hover:bg-white/20 backdrop-blur-sm'
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
                ? 'bg-gold text-black shadow-lg'
                : 'bg-white/10 text-cream hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <Wine className="w-5 h-5" />
            <span>Vins</span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          {!showWines ? (
            // Food Menu
            <div>
              <h3 className="text-3xl font-bold text-primary font-serif mb-8 text-center">
                {categories[activeCategory]?.name}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categories[activeCategory]?.items.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-cream rounded-lg overflow-hidden hover:bg-primary-light/10 transition-all duration-300 transform hover:scale-105 border border-primary/10 shadow-md hover:shadow-lg"
                  >
                    {/* Dish Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={dishImages[item.name] || dishImages['Menu Enfant']}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = dishImages['Menu Enfant'];
                        }}
                      />
                    </div>
                    
                    {/* Dish Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold text-primary font-serif">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-gold bg-gold/10 px-3 py-1 rounded-md ml-4 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-700 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Wine Menu
            <div>
              <h3 className="text-3xl font-bold text-primary font-serif mb-8 text-center">
                Sélection de Vins
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wines.map((wine) => (
                  <div
                    key={wine.id}
                    className="p-6 bg-cream rounded-lg hover:bg-primary-light/10 transition-all duration-300 transform hover:scale-105 text-center border border-primary/10"
                  >
                    <div className="flex justify-center mb-4">
                      <Wine className="w-12 h-12 text-gold" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary font-serif mb-2">
                      {wine.name}
                    </h4>
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold mb-3">
                      {wine.type}
                    </span>
                    <p className="text-gray-700 font-sans leading-relaxed mb-4">
                      {wine.description}
                    </p>
                    <div className="text-lg font-bold text-gold bg-gold/10 inline-block px-4 py-2 rounded-md">
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
          <p className="text-lg text-cream font-sans mb-6">
            Tous nos plats sont préparés avec des ingrédients frais et locaux
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-gold-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Réserver pour Déguster
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;