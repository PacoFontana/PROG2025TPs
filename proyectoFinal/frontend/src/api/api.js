import axios from 'axios';

const API_URL = 'http://localhost:3001/api/productos';

export const getProductos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.productos;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
}

export const createProducto = async (producto) => {
    try {
        const response = await axios.post(API_URL, producto);
        return response.data.producto;
    } catch (error) {
        console.error('Error creating producto:', error);
        throw error;
    }
}

export const updateProducto = async (id, producto) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, producto);
        return response.data.producto;
    } catch (error) {
        console.error('Error updating producto:', error);
        throw error;
    }
}

export const deleteProducto = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data.producto;
    } catch (error) {
        console.error('Error deleting producto:', error);
        throw error;
    }
}

export const getProductoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.producto;
    } catch (error) {
        console.error('Error fetching producto by ID:', error);
        throw error;
    }
}

export const searchProductos = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search`, { params: { q: query } });
        return response.data;
    } catch (error) {
        console.error('Error searching productos:', error);
        throw error;
    }
}

export const aumentarStock = async (id) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}/aumentar`);
        return response.data;
    } catch (error) {
        console.error('Error aumentando stock:', error);
        throw error;
    }
}

export const disminuirStock = async (id) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}/disminuir`);
        return response.data;
    } catch (error) {
        console.error('Error disminuyendo stock:', error);
        throw error;
    }
}