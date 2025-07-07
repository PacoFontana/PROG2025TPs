import { useState, useCallback, useMemo } from 'react';
import minusIcon from '../assets/minus.icon.svg';
import plusIcon from '../assets/plus.icon.svg';
import EditProductModal from './EditProductModal';
import '../css/productos.css';
import { aumentarStock, disminuirStock } from '../api/api';

function ProductoCard({ nombreProducto = "NombreProducto", idProducto = "12345", precio = 12345, stock = 0, onProductoUpdated }) {
    const [currentStock, setCurrentStock] = useState(stock);
    const [currentNombre, setCurrentNombre] = useState(nombreProducto);
    const [currentPrecio, setCurrentPrecio] = useState(precio);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Memoizar el objeto producto para evitar re-renders del modal
    const producto = useMemo(() => ({
        id: idProducto,
        nombre: currentNombre,
        precio: currentPrecio,
        stock: currentStock
    }), [idProducto, currentNombre, currentPrecio, currentStock]);

    // Optimizar funciones con useCallback
    const handleAumentarStock = useCallback(async () => {
        if (loading) return;
        
        try {
            setLoading(true);
            const productoActualizado = await aumentarStock(idProducto);
            setCurrentStock(productoActualizado.stock);
        } catch (error) {
            console.error('Error aumentando stock:', error);
        } finally {
            setLoading(false);
        }
    }, [idProducto, loading]);

    const handleDisminuirStock = useCallback(async () => {
        if (loading || currentStock <= 0) return;
        
        try {
            setLoading(true);
            const productoActualizado = await disminuirStock(idProducto);
            setCurrentStock(productoActualizado.stock);
        } catch (error) {
            console.error('Error disminuyendo stock:', error);
        } finally {
            setLoading(false);
        }
    }, [idProducto, loading, currentStock]);

    const handleEditClick = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleProductoUpdated = useCallback((productoActualizado) => {
        setCurrentNombre(productoActualizado.nombre);
        setCurrentPrecio(productoActualizado.precio);
        setCurrentStock(productoActualizado.stock);
        
        // Callback del componente padre
        onProductoUpdated?.(productoActualizado);
    }, [onProductoUpdated]);

    // Memoizar precio formateado
    const precioFormateado = useMemo(() => 
        `$${currentPrecio.toLocaleString()}`, 
        [currentPrecio]
    );

    return (
        <>
            <div className="producto-card">
                <div className="producto-info">
                    <h3>{currentNombre}</h3>
                    <p className="producto-id">#{idProducto}</p>
                    <p className="producto-precio">{precioFormateado}</p>
                </div>

                <div className="producto-actions">
                    <button 
                        className="edit-button" 
                        onClick={handleEditClick}
                        disabled={loading}
                    >
                        Editar
                    </button>
                    <button 
                        className="stock-button aumentar" 
                        onClick={handleAumentarStock}
                        disabled={loading}
                        aria-label="Aumentar stock"
                    >
                        <img src={plusIcon} alt="" />
                    </button>
                    <span className="stock-valor" aria-label={`Stock actual: ${currentStock}`}>
                        {currentStock}
                    </span>
                    <button 
                        className="stock-button disminuir" 
                        onClick={handleDisminuirStock}
                        disabled={loading || currentStock <= 0}
                        aria-label="Disminuir stock"
                    >
                        <img src={minusIcon} alt="" />
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <EditProductModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    producto={producto}
                    onProductoUpdated={handleProductoUpdated}
                />
            )}
        </>
    );
}

export default ProductoCard;