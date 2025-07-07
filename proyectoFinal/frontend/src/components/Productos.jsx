import { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard'
import '../css/productos.css'
import { getProductos } from '../api/api';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                setLoading(true);
                const productosData = await getProductos();
                setProductos(productosData);
                setError(null);
            } catch (err) {
                console.error('Error cargando productos:', err);
                setError('Error al cargar los productos');
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

    if (loading) {
        return (
            <div className="productos-container">
                <h2>Productos</h2>
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="productos-container">
                <h2>Productos</h2>
                <p style={{color: 'red'}}>{error}</p>
            </div>
        );
    }

    return (
        <div className="productos-container">
            <h2>Productos</h2>
            {productos.length === 0 ? (
                <p>No hay productos disponibles</p>
            ) : (
                productos.map((producto) => (
                    <ProductoCard
                        key={producto.id}
                        nombreProducto={producto.nombre}
                        idProducto={producto.id}
                        precio={producto.precio}
                        stock={producto.stock}
                    />
                ))
            )}
        </div>
    );
}

export default Productos;