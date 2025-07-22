import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Menu from './Menu';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from '../mock';

const Home = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleReservation = (formData) => {
    setReservationData(formData);
    // Mock reservation handling - in real app this would go to backend
    console.log('Reservation submitted:', formData);
    alert(`Merci ${formData.name} ! Votre réservation pour ${formData.guests} personnes le ${formData.date} à ${formData.time} a été enregistrée. Nous vous contacterons pour confirmation.`);
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header navigation={mockData.navigation} />
      <main>
        <Hero restaurant={mockData.restaurant} />
        <About 
          restaurant={mockData.restaurant} 
          features={mockData.features}
          testimonials={mockData.testimonials}
        />
        <Menu 
          categories={mockData.menuCategories}
          wines={mockData.wines}
        />
        <Gallery images={mockData.galleryImages} />
        <Contact 
          restaurant={mockData.restaurant}
          onReservation={handleReservation}
        />
      </main>
      <Footer restaurant={mockData.restaurant} />
    </div>
  );
};

export default Home;