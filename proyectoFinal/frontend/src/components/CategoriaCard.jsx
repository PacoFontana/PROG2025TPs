import '../css/categorias.css';
import dropdownIcon from '../assets/dropdown-arrow.icon.svg';

function CategoriasCard({ nombreCategoria = "Categoria", productos = ["Producto 1", "Producto 2", "Producto 3"] }) {
    return (
        <li>
            <div className="categoria-header">
                <span className="categoria-nombre">{nombreCategoria}</span>
                <button className="btn-dropdown-arrow">
                    <img src={dropdownIcon} alt="Desplegar" />
                </button>
            </div>
            <ul className="subcategorias-list">
                {productos.map((producto, index) => (
                    <li key={index} className="subcategoria-item">
                        <span>{producto}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default CategoriasCard;