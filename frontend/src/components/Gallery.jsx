import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = ({ images }) => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
            Découvrez Notre Ambiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Plongez dans l'atmosphère unique du Trip'Tik, où chaque détail contribue 
            à créer une expérience culinaire mémorable.
          </p>
        </div>

        {/* Gallery Grid - Using placeholder images for now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-primary-dark/20 rounded-lg overflow-hidden aspect-square hover:bg-primary-dark/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-black/60 mx-auto mb-3 group-hover:text-black transition-colors duration-300" />
                  <p className="text-sm font-semibold text-black/70 group-hover:text-black px-4 transition-colors duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Ambiance Description */}
        <div className="bg-primary-dark/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black font-serif mb-6">
                Une Atmosphère Authentique
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-sans mb-6">
                Nos murs de moellons apparents, nos étagères garnies de bouteilles de vin 
                et nos tableaux soigneusement sélectionnés créent un cadre intimiste qui 
                évoque l'âme des bistrots parisiens traditionnels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-sans">
                L'éclairage design, les tables en bois clair et la musique jazz en fond 
                sonore complètent cette ambiance unique, parfaite pour vos moments de partage 
                en famille ou entre amis.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-black font-serif mb-3">
                  Éclairage Design
                </h4>
                <p className="text-gray-700 font-sans">
                  Un éclairage soigneusement étudié pour créer une atmosphère chaleureuse et moderne.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-black font-serif mb-3">
                  Espaces Intimistes
                </h4>
                <p className="text-gray-700 font-sans">
                  Tables espacées avec soin pour garantir intimité et confort à nos convives.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-black font-serif mb-3">
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
          <p className="text-lg text-gray-600 font-sans mb-6">
            Venez découvrir notre atmosphère unique en personne
          </p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Réserver Votre Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;