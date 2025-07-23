import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// API Service for Trip'Tik Restaurant
export const apiService = {
  // Restaurant Information
  async getRestaurantInfo() {
    try {
      const response = await axios.get(`${API}/restaurant/info`);
      return response.data;
    } catch (error) {
      console.error('Error fetching restaurant info:', error);
      throw error;
    }
  },

  // Menu System
  async getMenuCategories() {
    try {
      const response = await axios.get(`${API}/menu/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu categories:', error);
      throw error;
    }
  },

  async getMenuItems(categoryId) {
    try {
      const response = await axios.get(`${API}/menu/items/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },

  async getWines() {
    try {
      const response = await axios.get(`${API}/menu/wines`);
      return response.data;
    } catch (error) {
      console.error('Error fetching wines:', error);
      throw error;
    }
  },

  // Reservations
  async createReservation(reservationData) {
    try {
      const response = await axios.post(`${API}/reservations`, reservationData);
      return response.data;
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  },

  async getReservations() {
    try {
      const response = await axios.get(`${API}/reservations`);
      return response.data;
    } catch (error) {
      console.error('Error fetching reservations:', error);
      throw error;
    }
  },

  async getReservation(reservationId) {
    try {
      const response = await axios.get(`${API}/reservations/${reservationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching reservation:', error);
      throw error;
    }
  },

  // Testimonials
  async getTestimonials() {
    try {
      const response = await axios.get(`${API}/testimonials`);
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  }
};

export default apiService;