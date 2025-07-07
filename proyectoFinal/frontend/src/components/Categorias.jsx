import '../css/categorias.css';
import CategoriasCard from './CategoriaCard';

function Categorias() {
    return (
        <div className="categorias-container">
            <h2>Categorías</h2>
            <ul className="categorias-list">
                <CategoriasCard nombreCategoria="Electrónica" productos={["Televisor 24'", "Computadora", "Celular Iphone 15", "Tablet Samsung"]} />
                <CategoriasCard nombreCategoria="Hogar" productos={["Sofá", "Mesa de comedor", "Silla de oficina", "Lámpara de pie"]} />
                <CategoriasCard nombreCategoria="Deportes" productos={["Bicicleta", "Pelota de fútbol", "Raqueta de tenis", "Equipo de gimnasio"]} />
                <CategoriasCard nombreCategoria="Ropa" productos={["Camisa", "Pantalones", "Zapatos deportivos", "Chaqueta"]} />
                </ul>
        </div>
    );
}

export default Categorias;