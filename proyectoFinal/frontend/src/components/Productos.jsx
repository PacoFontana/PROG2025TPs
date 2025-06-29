import ProductoCard from './ProductoCard'
import '../productos.css'

function Productos() {
    return (
        <div className="productos-container">
            <h2>Productos</h2>
                <ProductoCard />
                <ProductoCard />
                <ProductoCard />
                <ProductoCard />
                <ProductoCard />
                <ProductoCard />
        </div>
    );
}

export default Productos;