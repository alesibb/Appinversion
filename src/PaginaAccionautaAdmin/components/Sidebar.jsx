import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#004466] text-white h-screen p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Accionauta Admin</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin-dashboard" className="p-2 rounded hover:bg-[#007B93]">Dashboard</Link>
        <Link to="/inventory" className="p-2 rounded hover:bg-[#007B93]">Inventario</Link>
        <Link to="/orders" className="p-2 rounded hover:bg-[#007B93]">Órdenes</Link>
        <Link to="/purchases" className="p-2 rounded hover:bg-[#007B93]">Compras</Link>
        <Link to="/categories" className="p-2 rounded hover:bg-[#007B93]">Categorías</Link>
      </nav>
    </div>
  );
}

