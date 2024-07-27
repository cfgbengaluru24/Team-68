import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const searchSchemes = (formData) => {
  return axios.post(`${API_BASE_URL}/search-schemes`, formData);
};
