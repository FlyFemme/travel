import axios from 'axios';


const endpoint = 'http://localhost:8000/api'; 

export async function register(userData) {
  try {
    const response = await axios.post(`${endpoint}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(credentials) {
  try {
    const response = await axios.post(`${endpoint}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
  } catch (error) {
    throw error;
  }
}
