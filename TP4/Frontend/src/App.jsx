<<<<<<< HEAD
import React from 'react';
import TraerPersonas from './components/traerPersonas';
import "./components/css/Tarjetas.css";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>TP 4 - Grupo 32</h1>
      <TraerPersonas />
    </div>
  );
}

export default App;
=======
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
>>>>>>> ivoans
