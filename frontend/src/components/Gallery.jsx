import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = ({ images }) => {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
            Découvrez Notre Ambiance
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto leading-relaxed font-sans">
            Plongez dans l'atmosphère unique du Trip'Tik, où chaque détail contribue 
            à créer une expérience culinaire mémorable.
          </p>
        </div>

        {/* Gallery Grid - Mix of real photos and placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Real Bar Photo */}
          <div className="group relative bg-primary/10 rounded-lg overflow-hidden aspect-square hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1651980909099-ddb028d72855?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxiZWVyJTIwdGFwc3xlbnwwfHx8fDE3NTMzODM1NTN8MA&ixlib=rb-4.1.0&q=85"
              alt="Bar Trip'Tik avec tireuses à bière et ambiance authentique"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-semibold text-sm bg-primary/80 backdrop-blur-sm rounded px-3 py-1">
                Notre Bar - "On vous attend au Bar"
              </p>
            </div>
          </div>

          {/* Additional Gallery Images */}
          <div className="group relative bg-primary/10 rounded-lg overflow-hidden aspect-square hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwYmFyfGVufDB8fHx8MTc1MzM4MzU0Nnww&ixlib=rb-4.1.0&q=85"
              alt="Ambiance bistro Trip'Tik"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-semibold text-sm bg-primary/80 backdrop-blur-sm rounded px-3 py-1">
                Ambiance Bistro Authentique
              </p>
            </div>
          </div>

          {/* Placeholder Gallery Items */}
          {images.slice(2).map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-primary/10 rounded-lg overflow-hidden aspect-square hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-primary/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-primary/60 mx-auto mb-3 group-hover:text-primary transition-colors duration-300" />
                  <p className="text-sm font-semibold text-primary/70 group-hover:text-primary px-4 transition-colors duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Ambiance Description */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white font-serif mb-6">
                Une Atmosphère Authentique
              </h3>
              <p className="text-lg text-cream leading-relaxed font-sans mb-6">
                Nos murs de moellons apparents, nos étagères garnies de bouteilles de vin 
                et nos tableaux soigneusement sélectionnés créent un cadre intimiste qui 
                évoque l'âme des bistrots parisiens traditionnels.
              </p>
              <p className="text-lg text-cream leading-relaxed font-sans">
                L'éclairage design, les tables en bois clair et la musique jazz en fond 
                sonore complètent cette ambiance unique, parfaite pour vos moments de partage 
                en famille ou entre amis.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-primary font-serif mb-3">
                  Éclairage Design
                </h4>
                <p className="text-gray-700 font-sans">
                  Un éclairage soigneusement étudié pour créer une atmosphère chaleureuse et moderne.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-primary font-serif mb-3">
                  Espaces Intimistes
                </h4>
                <p className="text-gray-700 font-sans">
                  Tables espacées avec soin pour garantir intimité et confort à nos convives.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-primary font-serif mb-3">
                  Ambiance Jazz
                </h4>
                <p className="text-gray-700 font-sans">
                  Une sélection musicale jazz qui accompagne parfaitement vos repas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-primary-light font-sans mb-6">
            Venez découvrir notre atmosphère unique en personne
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-gold-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Réserver Votre Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;