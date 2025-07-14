import React from 'react';
import { useMemo } from 'react';
import '../css/categorias.css';
import CategoriasCard from './CategoriaCard';

function Categorias({ productos = [], onCategoryFilter, selectedCategory }) {
    
    // Generar categorías dinámicamente desde los productos
    const categorias = useMemo(() => {
        if (!productos.length) return [];
        
        // Agrupar productos por categoría
        const categoriasMap = productos.reduce((acc, producto) => {
            const categoria = producto.categoria || 'Sin categoría';
            if (!acc[categoria]) {
                acc[categoria] = [];
            }
            acc[categoria].push(producto);
            return acc;
        }, {});
        
        // Convertir a array y ordenar por nombre de categoría
        return Object.keys(categoriasMap)
            .sort()
            .map(nombreCategoria => ({
                nombre: nombreCategoria,
                productos: categoriasMap[nombreCategoria].sort((a, b) => a.nombre.localeCompare(b.nombre)),
                count: categoriasMap[nombreCategoria].length
            }));
    }, [productos]);

    const handleCategoryClick = (categoryName) => {
        // Si ya está seleccionada la misma categoría, deseleccionar (mostrar todos)
        const newCategory = selectedCategory === categoryName ? null : categoryName;
        onCategoryFilter?.(newCategory);
    };

    const handleShowAll = () => {
        onCategoryFilter?.(null);
    };

    return (
        <div className="categorias-container">
            <h2>Categorías</h2>
            
            {/* Botón para mostrar todos los productos */}
            <div className="categoria-all">
                <button 
                    className={`btn-show-all ${!selectedCategory ? 'active' : ''}`}
                    onClick={handleShowAll}
                >
                    Todos los productos ({productos.length})
                </button>
            </div>
            
            <ul className="categorias-list">
                {categorias.length === 0 ? (
                    <li className="no-categories">
                        <span>No hay productos para mostrar categorías</span>
                    </li>
                ) : (
                    categorias.map((categoria) => (
                        <CategoriasCard 
                            key={categoria.nombre}
                            nombreCategoria={categoria.nombre}
                            productos={categoria.productos}
                            count={categoria.count}
                            isSelected={selectedCategory === categoria.nombre}
                            onCategoryClick={handleCategoryClick}
                        />
                    ))
                )}
            </ul>
        </div>
    );
}

export default Categorias;