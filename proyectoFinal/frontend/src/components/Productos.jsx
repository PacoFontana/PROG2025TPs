import React from 'react';
import { useCallback } from 'react';
import ProductoCard from './ProductoCard'
import '../css/productos.css'

function Productos({ 
    productos = [], 
    loading = false, 
    searchQuery = '', 
    selectedCategory = null,
    onProductosChanged,
    onClearFilters
}) {
    
    const handleProductoUpdated = useCallback((productoActualizado) => {
        onProductosChanged?.()
    }, [onProductosChanged]);

    const handleProductoDeleted = useCallback((productoId) => {
        onProductosChanged?.()
    }, [onProductosChanged]);

    if (loading) {
        return (
            <div className="productos-container">
                <h2>Productos</h2>
                <div className="loading-container">
                    <p>Cargando productos...</p>
                </div>
            </div>
        );
    }

    const getTitle = () => {
        const count = productos.length
        const countText = count === 1 ? 'producto' : 'productos'
        
        if (selectedCategory && searchQuery) {
            return `${count} ${countText} en "${selectedCategory}" que coinciden con "${searchQuery}"`
        } else if (selectedCategory) {
            return `${count} ${countText} en "${selectedCategory}"`
        } else if (searchQuery) {
            return `${count} ${countText} encontrados para "${searchQuery}"`
        } else {
            return `Todos los productos (${count})`
        }
    }

    return (
        <div className="productos-container">
            <h2>{getTitle()}</h2>
            {productos.length === 0 ? (
                <div className="empty-state">
                    <p>
                        {selectedCategory || searchQuery 
                            ? 'No se encontraron productos que coincidan con los filtros'
                            : 'No hay productos disponibles'
                        }
                    </p>
                    {(selectedCategory || searchQuery) && (
                        <button 
                            className="clear-filters-button"
                            onClick={onClearFilters}
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
            ) : (
                <div className="productos-grid">
                    {productos.map((producto) => (
                        <ProductoCard
                            key={`producto-${producto.id}`}
                            nombreProducto={producto.nombre}
                            idProducto={producto.id}
                            precio={producto.precio}
                            stock={producto.stock}
                            onProductoUpdated={handleProductoUpdated}
                            onProductoDeleted={handleProductoDeleted}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Productos;