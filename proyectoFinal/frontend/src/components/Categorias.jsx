import '../categorias.css';
import CategoriasCard from './CategoriaCard';

function Categorias() {
    return (
        <div className="categorias-container">
            <h2>Categorías</h2>
            <CategoriasCard />
            <CategoriasCard />
        </div>
    );
}

export default Categorias;