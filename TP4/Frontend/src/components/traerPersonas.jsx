<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import ListaTarjetas from './listarTarjetas';

const TraerPersonas = () => {
=======
import React, { useState, useEffect } from 'react';

function TraerPersonas() {
>>>>>>> ivoans
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas')
<<<<<<< HEAD
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        return res.json();
      })
      .then(data => setPersonas(data))
      .catch(err => console.error('Error al traer personas:', err));
=======
      .then((res) => res.json())
      .then((data) => {
        setPersonas(data.data);
      })
      .catch((error) => {
        console.error('Error al traer personas:', error);
      });
>>>>>>> ivoans
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
<<<<<<< HEAD
      <ListaTarjetas personas={personas} />
    </div>
  );
};
=======
      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellido} - {persona.edad} años
            <br />
            <strong>ID:</strong> {persona.id}
            <br />
            <strong>Mail:</strong> {persona.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> ivoans

export default TraerPersonas;
