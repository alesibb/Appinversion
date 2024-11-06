import React from 'react';

export default function OrdersTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Órdenes Recientes</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">Cliente</th>
            <th className="py-2">Monto</th>
            <th className="py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {/* Ejemplo de filas */}
          <tr>
            <td className="py-2">1</td>
            <td className="py-2">Juan Pérez</td>
            <td className="py-2">$1,500.00 MXN</td>
            <td className="py-2 text-green-500">Completado</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
