import React from 'react';
import ClienteBox from './ClienteBox';

function NutriologoCliente() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_140px_140px]   h-auto text-center mb-2 font-semibold">
        <p className="text-start  border-1  p-2">Nombre</p>
        <p className="p-2 border-1  ">Progreso</p>
        <p className="p-2 border-1 ">Ultima Revision</p>
        {/* <ClienteBox/> */}
      </div>
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
      <ClienteBox />
    </div>
  );
}

export default NutriologoCliente;
