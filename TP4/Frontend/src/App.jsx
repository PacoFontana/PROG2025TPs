import { useState } from 'react'
import './App.css'
import TraerPersonas from './components/traerPersonas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TraerPersonas />
    </div>
  )
}

export default App
