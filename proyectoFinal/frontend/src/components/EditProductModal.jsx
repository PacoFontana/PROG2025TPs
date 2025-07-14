import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import '../css/modal.css';
import { updateProducto } from '../api/api';

function EditProductModal({ isOpen, onClose, producto, onProductoUpdated }) {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        stock: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Optimizar con useCallback para evitar re-renders
    const resetForm = useCallback(() => {
        if (producto) {
            setFormData({
                nombre: producto.nombre || '',
                precio: producto.precio || '',
                stock: producto.stock || ''
            });
        }
        setError('');
    }, [producto]);

    // Actualizar formData cuando cambie el producto o se abra el modal
    useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen, resetForm]);

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
        
        // Validaciones rápidas con early return
        const nombre = formData.nombre.trim();
        const precio = Number(formData.precio);
        const stock = Number(formData.stock);

        if (!nombre) return setError('El nombre del producto es requerido');
        if (precio <= 0) return setError('El precio debe ser mayor a 0');
        if (stock < 0) return setError('El stock no puede ser negativo');
        if (isNaN(precio)) return setError('El precio debe ser un número válido');
        if (isNaN(stock)) return setError('El stock debe ser un número válido');

        try {
            setLoading(true);
            setError('');
            
            const productoActualizado = await updateProducto(producto.id, {
                nombre,
                precio,
                stock
            });

            onProductoUpdated(productoActualizado);
            onClose();
        } catch (error) {
            console.error('Error actualizando producto:', error);
            setError('Error al actualizar el producto. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = useCallback(() => {
        if (!loading) {
            setError('');
            onClose();
        }
    }, [loading, onClose]);

    // Early return si no está abierto
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Editar Producto</h2>
                    <button className="modal-close" onClick={handleClose}>×</button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre del Producto:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="precio">Precio:</label>
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            value={formData.precio}
                            onChange={handleInputChange}
                            min="0"
                            step="0.01"
                            disabled={loading}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Stock:</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={formData.stock}
                            onChange={handleInputChange}
                            min="0"
                            disabled={loading}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

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
                            className={`btn-save ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Guardando...
                                </>
                            ) : (
                                'Guardar Cambios'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProductModal;