import React from 'react';
import Sidebar from './Sidebar';
import StoreInfo from './StoreInfo';
import InventoryTable from './InventoryTable'; // Reutilizado para mostrar activos/inventario
import OrdersTable from './OrdersTable'; // Reutilizado para ver las órdenes

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-[#022D41] min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-6">Panel de Control de Accionauta</h1>
        <StoreInfo />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InventoryTable />
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

