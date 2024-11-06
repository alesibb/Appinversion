import React from 'react';

export default function StoreInfo() {
  return (
    <div className="bg-[#033B54] p-6 rounded-lg mb-4">
      <h2 className="text-xl font-bold text-white">Resumen de Inversiones</h2>
      <div className="mt-4">
        <p className="text-white">Total Invertido: <span className="font-bold text-green-500">$1,250,000.00 MXN</span></p>
        <p className="text-white">Activos Totales: <span className="font-bold">45</span></p>
        <p className="text-white">Órdenes Procesadas: <span className="font-bold">320</span></p>
      </div>
    </div>
  );
}
