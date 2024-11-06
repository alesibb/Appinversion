import React from 'react';

export default function InventoryTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Inventario de Activos</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Activo</th>
            <th className="py-2">Cantidad</th>
            <th className="py-2">Precio Actual</th>
          </tr>
        </thead>
        <tbody>
          {/* Ejemplo de filas */}
          <tr>
            <td className="py-2">CEMEX CPO</td>
            <td className="py-2">150</td>
            <td className="py-2">$13.58</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
