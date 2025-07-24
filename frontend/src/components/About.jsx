import React from 'react';
import { Wine, Users, ChefHat, Music, Star } from 'lucide-react';

const About = ({ restaurant, features, testimonials }) => {
  const getIcon = (iconName) => {
    const icons = {
      Wine: Wine,
      Users: Users,
      Chef: ChefHat,
      Music: Music
    };
    const IconComponent = icons[iconName] || Wine;
    return <IconComponent className="w-8 h-8 text-gold" />;
  };

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
            L'Âme d'un Bistro Parisien
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto leading-relaxed font-sans">
            Découvrez Trip'Tik, où l'esprit traditionnel français rencontre la modernité dans un cadre intimiste et chaleureux sur l'île de la Réunion.
          </p>
        </div>

        {/* Restaurant Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary font-serif">Notre Histoire</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Le Trip'Tik évoque l'âme des bistrots parisiens avec ses murs de moellons apparents 
              et ses étagères remplies de bouteilles de vin. Chaque tableau qui orne notre grande 
              salle à manger raconte une histoire, créant une atmosphère unique où tradition et modernité se rencontrent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Notre éclairage design et nos tables en bois clair apportent une touche contemporaine, 
              tandis que la musique jazz en fond sonore crée cette atmosphère spacieuse, idéale pour 
              se retrouver entre amis ou en famille.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Les fenêtres laissent entrer la lumière naturelle, et nos tables sont espacées juste 
              comme il faut pour assurer une expérience agréable, sans trop d'agitation.
            </p>
          </div>
          
          <div className="bg-primary rounded-lg p-8 hover:bg-primary-light transition-all duration-300 transform hover:scale-105 shadow-lg">
            <h4 className="text-2xl font-bold text-white font-serif mb-4">Expérience Unique</h4>
            <p className="text-cream font-sans leading-relaxed mb-6">
              Une cuisine authentique française sublimée par des touches créoles locales, 
              dans un cadre qui vous transportera directement dans les rues de Paris.
            </p>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-gold fill-current" />
              ))}
              <span className="ml-2 text-cream font-semibold">Excellence reconnue</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg hover:bg-primary-light/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-primary/10"
            >
              <div className="flex justify-center mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-primary font-serif mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white font-serif text-center mb-12">
            Ce que disent nos clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? 'text-gold fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-sans italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary font-serif">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;