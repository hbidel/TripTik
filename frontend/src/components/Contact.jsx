import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Instagram } from 'lucide-react';

const Contact = ({ restaurant, onReservation, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      onReservation(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Réservez Votre Table
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto leading-relaxed font-sans">
            Contactez-nous pour réserver votre table ou pour toute information. 
            Nous serons ravis de vous accueillir dans notre bistro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary font-serif mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary font-serif">Adresse</h4>
                    <p className="text-gray-700 font-sans">{restaurant.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary font-serif">Téléphone</h4>
                    <p className="text-gray-700 font-sans">{restaurant.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary font-serif">Email</h4>
                    <p className="text-gray-700 font-sans">{restaurant.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary font-serif">Instagram</h4>
                    <a 
                      href={restaurant.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 font-sans hover:text-primary transition-colors duration-200"
                    >
                      @triptikrestaurant
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary font-serif">Horaires d'ouverture</h4>
                    <p className="text-gray-700 font-sans">
                      Mar - Ven: {restaurant.hours.weekdays}<br />
                      Sam: {restaurant.hours.saturday}<br />
                      <span className="text-red-600">Fermé le {restaurant.hours.closed}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-primary-light/30 rounded-lg p-6 backdrop-blur-sm border border-gold/20">
              <h4 className="text-xl font-bold text-white font-serif mb-4">
                Bon à Savoir
              </h4>
              <ul className="space-y-2 text-cream font-sans">
                <li>• Réservation recommandée</li>
                <li>• Groupes de plus de 8 personnes sur demande</li>
                <li>• Terrasse disponible selon météo</li>
                <li>• Parking à proximité</li>
                <li>• Cartes bancaires acceptées</li>
              </ul>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary font-serif mb-6">
              Formulaire de Réservation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                    placeholder="+262 123 456 789"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Nombre de convives *
                  </label>
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary font-serif mb-2">
                    Heure souhaitée *
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans"
                  >
                    <option value="">Choisir l'heure</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-primary font-serif mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-200 font-sans resize-none"
                  placeholder="Demandes spéciales, allergies, occasion particulière..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  isSubmitting || loading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gold text-black hover:bg-gold-light'
                }`}
              >
                {isSubmitting || loading ? 'Envoi en cours...' : 'Confirmer la Réservation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;