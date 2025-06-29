import SearchBar from './components/SearchBar'
import Categorias from './components/Categorias'
import Productos from './components/Productos'

function App() {
  return (
    <>
      <SearchBar />
      <div className="main-layout">
        <aside className="categorias-aside">
          <Categorias />
        </aside>
        <main className="productos-main">
          <Productos />
        </main>
      </div>
    </>
  )
}

export default App
