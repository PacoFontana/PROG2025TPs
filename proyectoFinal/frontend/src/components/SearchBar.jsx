import '../searchBar.css';
import magnifyingGlassIcon from '../assets/magnifying-glass.icon.svg';
import plusIcon from '../assets/plus.icon.svg';
import deleteIcon from '../assets/delete.icon.svg';

function SearchBar() {

    return (
        <div className="search-bar-wrapper">
            <label className="search-bar-container" htmlFor="search-bar">
                <img id='imagen-lupa' src={magnifyingGlassIcon} alt="Lupa" />
                <input type="text" name="search-bar" id="search-bar" />
            </label>
            <div className="action-buttons">
                <button className="btn-crear-producto">
                    <img src={plusIcon} alt="Crear producto" />
                </button>
                <button className="btn-eliminar-producto">
                    <img src={deleteIcon} alt="Eliminar producto" />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;