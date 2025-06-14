import React from 'react';
import TarjetaPersona from './tarjetaPersona';

const ListaTarjetas = ({ personas }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {personas.map(p => (
        <TarjetaPersona key={p.id} persona={p} />
      ))}
    </div>
  );
};

export default ListaTarjetas;
