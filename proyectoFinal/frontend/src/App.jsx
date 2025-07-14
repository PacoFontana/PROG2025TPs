import { useState, useCallback, useEffect } from 'react'
import React from 'react';
import SearchBar from './components/SearchBar'
import Categorias from './components/Categorias'
import Productos from './components/Productos'
import CreateProductModal from './components/CreateProductModal'
import './css/index.css'
import { getProductos } from './api/api'

function App() {
  const [productos, setProductos] = useState([])
  const [filteredProductos, setFilteredProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  // Cargar productos iniciales
  const cargarProductos = useCallback(async () => {
    try {
      setLoading(true)
      const productosData = await getProductos()
      const productos = Array.isArray(productosData) ? productosData : []
      setProductos(productos)
      setFilteredProductos(productos)
    } catch (error) {
      console.error('Error cargando productos:', error)
      setProductos([])
      setFilteredProductos([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    cargarProductos()
  }, [cargarProductos])

  // Aplicar filtros cuando cambie la búsqueda o categoría
  useEffect(() => {
    let filtered = [...productos]

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(producto => 
        producto.categoria === selectedCategory
      )
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(producto =>
        producto.nombre.toLowerCase().includes(query) ||
        producto.categoria?.toLowerCase().includes(query)
      )
    }

    setFilteredProductos(filtered)
  }, [productos, selectedCategory, searchQuery])

  // Callback para manejar búsqueda
  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  // Callback para filtrar por categoría
  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category)
  }, [])

  // Callback para crear producto
  const handleCreateProduct = useCallback(() => {
    setIsCreateModalOpen(true)
  }, [])

  // Callback para cerrar modal de creación
  const handleCloseCreateModal = useCallback(() => {
    setIsCreateModalOpen(false)
  }, [])

  // Callback cuando se crea un nuevo producto
  const handleProductoCreated = useCallback((nuevoProducto) => {
    setProductos(prev => [...prev, nuevoProducto])
    cargarProductos() // Recargar para asegurar consistencia
  }, [cargarProductos])

  // Callback para limpiar filtros
  const handleClearFilters = useCallback(() => {
    setSearchQuery('')
    setSelectedCategory(null)
  }, [])

  // Callback para recargar productos después de cambios
  const handleProductosChanged = useCallback(() => {
    cargarProductos()
  }, [cargarProductos])

  return (
    <div className="main-layout">
      <aside className="categorias-aside">
        <Categorias 
          productos={productos}
          selectedCategory={selectedCategory}
          onCategoryFilter={handleCategoryFilter}
        />
      </aside>
      <main className="content-main">
        <SearchBar 
          onSearch={handleSearch}
          onCreateProduct={handleCreateProduct}
        />
        <Productos 
          productos={filteredProductos}
          loading={loading}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onProductosChanged={handleProductosChanged}
          onClearFilters={handleClearFilters}
        />
      </main>
      
      <CreateProductModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onProductoCreated={handleProductoCreated}
      />
    </div>
  )
}

export default App
