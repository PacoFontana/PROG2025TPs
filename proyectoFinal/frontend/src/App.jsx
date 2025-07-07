import SearchBar from './components/SearchBar'
import Categorias from './components/Categorias'
import Productos from './components/Productos'
import './css/index.css'

function App() {
  return (
    <div className="main-layout">
      <aside className="categorias-aside">
        <Categorias />
      </aside>
      <main className="content-main">
        <SearchBar />
        <Productos />
      </main>
    </div>
  )
}

export default App
