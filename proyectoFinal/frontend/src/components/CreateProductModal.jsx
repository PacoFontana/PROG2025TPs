import React from 'react';
import { useState, useCallback } from 'react';
import '../css/modal.css';
import { createProducto } from '../api/api';

function CreateProductModal({ isOpen, onClose, onProductoCreated }) {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        descripcion: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const resetForm = useCallback(() => {
        setFormData({
            nombre: '',
            precio: '',
            stock: '',
            categoria: '',
            descripcion: ''
        });
        setError('');
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Limpiar error cuando usuario empiece a escribir
        if (error) setError('');
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validaciones
        const nombre = formData.nombre.trim();
        const precio = parseFloat(formData.precio);
        const stock = parseInt(formData.stock) || 0;
        const categoria = formData.categoria.trim();
        const descripcion = formData.descripcion.trim();

        if (!nombre) {
            setError('El nombre del producto es requerido');
            return;
        }

        if (nombre.length < 3) {
            setError('El nombre debe tener al menos 3 caracteres');
            return;
        }

        if (nombre.length > 50) {
            setError('El nombre no puede exceder los 50 caracteres');
            return;
        }

        if (!categoria) {
            setError('La categoría es requerida');
            return;
        }

        if (categoria.length < 3) {
            setError('La categoría debe tener al menos 3 caracteres');
            return;
        }

        if (categoria.length > 50) {
            setError('La categoría no puede exceder los 50 caracteres');
            return;
        }

        if (descripcion.length > 500) {
            setError('La descripción no puede exceder los 500 caracteres');
            return;
        }

        if (!formData.precio || isNaN(precio) || precio <= 0) {
            setError('El precio debe ser un número positivo');
            return;
        }

        if (isNaN(stock) || stock < 0) {
            setError('El stock no puede ser negativo');
            return;
        }

        try {
            setLoading(true);
            setError('');
            
            const productoData = {
                nombre,
                precio,
                stock,
                categoria,
                descripcion: descripcion || '' // Descripción puede estar vacía según el middleware
            };

            console.log('Enviando datos:', productoData); // Para debug
            
            const nuevoProducto = await createProducto(productoData);

            // Notificar al componente padre
            onProductoCreated?.(nuevoProducto);
            
            // Cerrar modal y resetear form
            resetForm();
            onClose();
            
        } catch (error) {
            console.error('Error completo:', error);
            
            // Manejo de errores más específico
            if (error.response) {
                // Error del servidor
                const errorMessage = error.response.data?.error || 
                                   error.response.data?.mensaje || 
                                   `Error del servidor: ${error.response.status}`;
                setError(errorMessage);
            } else if (error.request) {
                // Error de red
                setError('Error de conexión. Verifique que el servidor esté funcionando.');
            } else {
                // Otro tipo de error
                setError(error.message || 'Error inesperado al crear el producto');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleClose = useCallback(() => {
        if (!loading) {
            resetForm();
            onClose();
        }
    }, [loading, resetForm, onClose]);

    const handleOverlayClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }, [handleClose]);

    // No renderizar si no está abierto
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Crear Nuevo Producto</h2>
                    <button 
                        className="modal-close-btn"
                        onClick={handleClose}
                        disabled={loading}
                        aria-label="Cerrar modal"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    {error && (
                        <div className="error-message" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="create-nombre">Nombre del Producto:</label>
                        <input
                            type="text"
                            id="create-nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            disabled={loading}
                            placeholder="Ingrese el nombre del producto"
                            maxLength="50"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="create-categoria">Categoría:</label>
                        <input
                            type="text"
                            id="create-categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleInputChange}
                            disabled={loading}
                            placeholder="Ingrese la categoría"
                            maxLength="50"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="create-descripcion">Descripción:</label>
                        <textarea
                            id="create-descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            disabled={loading}
                            placeholder="Descripción del producto (opcional)"
                            maxLength="500"
                            rows="3"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="create-precio">Precio:</label>
                            <input
                                type="number"
                                id="create-precio"
                                name="precio"
                                value={formData.precio}
                                onChange={handleInputChange}
                                disabled={loading}
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="create-stock">Stock:</label>
                            <input
                                type="number"
                                id="create-stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleInputChange}
                                disabled={loading}
                                min="0"
                                step="1"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn-cancel"
                            onClick={handleClose}
                            disabled={loading}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={loading}
                        >
                            {loading ? 'Creando...' : 'Crear Producto'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProductModal;
