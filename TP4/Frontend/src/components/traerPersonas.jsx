import React, { useState, useEffect } from 'react';

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas')
      .then((res) => res.json())
      .then((data) => {
        setPersonas(data.data);
      })
      .catch((error) => {
        console.error('Error al traer personas:', error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
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

export default TraerPersonas;
