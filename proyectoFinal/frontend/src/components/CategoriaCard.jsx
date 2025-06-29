import '../categorias.css';
import dropdownIcon from '../assets/dropdown-arrow.icon.svg';

function CategoriasCard() {
    return (
            <ul className="categorias-list">
                <li>
                    <div className="categoria-header">
                        <span>Electrónica</span>
                        <button className="btn-dropdown-arrow">
                            <img src={dropdownIcon} alt="Desplegar" />
                        </button>
                    </div>
                    <ul className="subcategorias-list">
                        <li>Televisor 24'</li>
                        <li>Computadora</li>
                        <li>Celular Iphone 15</li>
                        <li>Tablet Samsung</li>
                    </ul>
                </li>
            </ul>
    );
}

export default CategoriasCard;