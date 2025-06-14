import React, { useEffect, useState } from 'react';
import ListaTarjetas from './listarTarjetas';

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas')
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        return res.json();
      })
      .then(data => setPersonas(data))
      .catch(err => console.error('Error al traer personas:', err));
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;
