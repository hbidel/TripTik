import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Menu from './Menu';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from '../mock';
import apiService from '../services/apiService';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(mockData.restaurant);
  const [menuCategories, setMenuCategories] = useState(mockData.menuCategories);
  const [wines, setWines] = useState(mockData.wines);
  const [testimonials, setTestimonials] = useState(mockData.testimonials);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  // Load data from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load restaurant info
        const restaurantInfo = await apiService.getRestaurantInfo();
        setRestaurantData(restaurantInfo);

        // Load menu categories and items
        const categories = await apiService.getMenuCategories();
        const categoriesWithItems = await Promise.all(
          categories.map(async (category) => {
            try {
              const items = await apiService.getMenuItems(category.id);
              return {
                ...category,
                items: items
              };
            } catch (error) {
              console.error(`Error loading items for category ${category.name}:`, error);
              return {
                ...category,
                items: []
              };
            }
          })
        );
        setMenuCategories(categoriesWithItems);

        // Load wines
        const winesData = await apiService.getWines();
        setWines(winesData);

        // Load testimonials
        const testimonialsData = await apiService.getTestimonials();
        setTestimonials(testimonialsData);

        setError(null);
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Failed to load restaurant data. Using cached information.');
        // Keep using mock data as fallback
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleReservation = async (formData) => {
    try {
      setLoading(true);
      const reservation = await apiService.createReservation(formData);
      
      // Success feedback
      alert(`Merci ${formData.name} ! Votre réservation (ID: ${reservation.id}) pour ${formData.guests} personnes le ${formData.date} à ${formData.time} a été enregistrée. Nous vous contacterons pour confirmation.`);
      
      // Reset form data
      setReservationData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('Erreur lors de la création de la réservation. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !restaurantData) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black font-serif text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-sans text-sm">{error}</p>
        </div>
      )}
      
      <Header navigation={mockData.navigation} />
      <main>
        <Hero restaurant={restaurantData} />
        <About 
          restaurant={restaurantData} 
          features={mockData.features}
          testimonials={testimonials}
        />
        <Menu 
          categories={menuCategories}
          wines={wines}
          beverages={mockData.beverages}
        />
        <Gallery images={mockData.galleryImages} />
        <Contact 
          restaurant={restaurantData}
          onReservation={handleReservation}
          loading={loading}
        />
      </main>
      <Footer restaurant={restaurantData} />
    </div>
  );
};

export default Home;