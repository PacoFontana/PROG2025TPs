import React from 'react';
import TarjetaPersona from './tarjetaPersona';
import "./css/Tarjetas.css";

const ListaTarjetas = ({ personas }) => {
  return (
    <div class="orden-tarjeta">
      {personas.map(p => (
        <TarjetaPersona key={p.id} persona={p} />
      ))}
    </div>
  );
};

export default ListaTarjetas;
