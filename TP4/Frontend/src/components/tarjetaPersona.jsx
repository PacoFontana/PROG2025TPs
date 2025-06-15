import React from 'react';
import "./css/Tarjetas.css";

const TarjetaPersona = ({ persona }) => {
  const { nombre, apellido, edad, email } = persona;

  return (
    <div class="caja-tarjeta">
      <h3>{nombre} {apellido}</h3>
      <p>Edad: {edad}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default TarjetaPersona;
