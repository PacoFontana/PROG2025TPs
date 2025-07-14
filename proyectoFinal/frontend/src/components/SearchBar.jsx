import React from 'react';
import { useState, useCallback, useRef } from 'react';
import '../css/searchBar.css';
import magnifyingGlassIcon from '../assets/magnifying-glass.icon.svg';
import plusIcon from '../assets/plus.icon.svg';

function SearchBar({ onSearch, onCreateProduct }) {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch?.(value);
    }, [onSearch]);

    const handleCreateClick = useCallback(() => {
        onCreateProduct?.();
    }, [onCreateProduct]);

    const handleContainerClick = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const handleClearSearch = useCallback(() => {
        setSearchValue('');
        onSearch?.('');
        inputRef.current?.focus();
    }, [onSearch]);

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-container" onClick={handleContainerClick}>
                <img id='imagen-lupa' src={magnifyingGlassIcon} alt="Buscar" />
                <input 
                    ref={inputRef}
                    type="text" 
                    name="search-bar" 
                    id="search-bar"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Buscar productos por nombre o categoría..."
                />
                {searchValue && (
                    <button 
                        className="btn-clear-search"
                        onClick={handleClearSearch}
                        type="button"
                        aria-label="Limpiar búsqueda"
                    >
                        ×
                    </button>
                )}
            </div>
            <div className="action-buttons">
                <button 
                    className="btn-crear-producto"
                    onClick={handleCreateClick}
                    title="Crear nuevo producto"
                    aria-label="Crear nuevo producto"
                >
                    <img src={plusIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;