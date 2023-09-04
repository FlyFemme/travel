import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export async function getAllCards() {
    const response = await axios.get(`${endpoint}/cards`);
    return response.data;
}

export async function getCardById(id) {
    try {
        const response = await axios.get(`${endpoint}/card/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function storeDestination(destionationData) {
    try {
        const response = await axios.post(`${endpoint}/card`, destionationData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateDestination(id, destinationData) {
    try {
        const response = await axios.put(`${endpoint}/card/${id}`, destinationData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function deleteCard(id) {
    try {
        await axios.delete(`${endpoint}/card/${id}`);
    } catch (error) {
        throw error;
    }
}

