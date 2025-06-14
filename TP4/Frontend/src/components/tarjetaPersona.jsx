import React from 'react';

const TarjetaPersona = ({ persona }) => {
  const { nombre, apellido, edad, email } = persona;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '200px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{nombre} {apellido}</h3>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default TarjetaPersona;
