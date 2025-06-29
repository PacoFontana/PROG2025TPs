import minusIcon from '../assets/minus.icon.svg';
import plusIcon from '../assets/plus.icon.svg';
import '../productos.css';

function ProductoCard() {
    return (
        <div className="producto-card">
            <div className="producto-info">
                <h3>NombreProducto</h3>
                <p className="producto-id">#12345</p>
            </div>

            <div className="producto-actions">
                <button className="edit-button">Editar</button>
                <button className="stock-button">
                    <img src={plusIcon} alt="Sumar" />
                </button>
                <span className="stock-valor">STOCK</span>
                <button className="stock-button">
                    <img src={minusIcon} alt="Restar" />
                </button>
            </div>
        </div>
    );
}

export default ProductoCard;