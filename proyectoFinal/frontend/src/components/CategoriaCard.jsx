import React from 'react';
import { useState, useCallback } from 'react';
import '../css/categorias.css';
import dropdownIcon from '../assets/dropdown-arrow.icon.svg';

function CategoriasCard({ 
    nombreCategoria = "Categoria", 
    productos = [], 
    count = 0,
    isSelected = false,
    onCategoryClick 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    const handleCategoryClick = useCallback(() => {
        onCategoryClick?.(nombreCategoria);
    }, [nombreCategoria, onCategoryClick]);

    return (
        <li className={`categoria-item ${isSelected ? 'selected' : ''}`}>
            <div className="categoria-header">
                <button 
                    className="categoria-button"
                    onClick={handleCategoryClick}
                    title={`Filtrar por ${nombreCategoria}`}
                >
                    <span className="categoria-nombre">
                        {nombreCategoria} ({count})
                    </span>
                </button>
                <button 
                    className={`btn-dropdown-arrow ${isExpanded ? 'expanded' : ''}`}
                    onClick={handleToggleExpand}
                    title={isExpanded ? 'Contraer' : 'Expandir'}
                >
                    <img src={dropdownIcon} alt={isExpanded ? 'Contraer' : 'Expandir'} />
                </button>
            </div>
            
            {isExpanded && (
                <ul className="subcategorias-list">
                    {productos.length === 0 ? (
                        <li className="subcategoria-item empty">
                            <span>No hay productos en esta categoría</span>
                        </li>
                    ) : (
                        productos.map((producto) => (
                            <li key={producto.id} className="subcategoria-item">
                                <span className="producto-nombre">{producto.nombre}</span>
                                <span className="producto-precio">${producto.precio?.toLocaleString()}</span>
                                <span className="producto-stock">Stock: {producto.stock}</span>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </li>
    );
}

export default CategoriasCard;