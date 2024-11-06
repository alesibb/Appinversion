import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSelectionPage from "./PaginaAccionauta/AccountSelectionPage";
import LoginAccionauta from "./PaginaAccionauta/LoginAccionauta";
import RegisterAccionauta from "./PaginaAccionauta/RegisterAccionauta";
import UserDashboard from "./PaginaAccionautaUser/UserDashboard";
import DestacadosDashboard from "./PaginaAccionautaUser/componentsUser/DestacadosDashboard";
import Graficas from "./PaginaAccionautaUser/componentsUser/Graficas";
import Perfil from "./PaginaAccionautaUser/componentsUser/Perfil";
import Compra from "./PaginaAccionautaUser/componentsUser/Compra";

import AdminDashboard from "./PaginaAccionautaAdmin/AdminDashboard";
import InventoryTable from "./PaginaAccionautaAdmin/components/InventoryTable";
import OrdersTable from "./PaginaAccionautaAdmin/components/OrdersTable";
import Sidebar from "./PaginaAccionautaAdmin/components/Sidebar";
import StoreInfo from "./PaginaAccionautaAdmin/components/StoreInfo";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas de la página de usuario */}
        <Route path="/" element={<AccountSelectionPage />} />
        <Route path="/login" element={<LoginAccionauta />} />
        <Route path="/register-usuario" element={<RegisterAccionauta />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-dashboard/destacados" element={<DestacadosDashboard />} />
        <Route path="/user-dashboard/graficas" element={<Graficas />} />
        <Route path="/user-dashboard/perfil" element={<Perfil />} />
        <Route path="/user-dashboard/compra" element={<Compra />} />

        {/* Rutas de administración */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/inventory" element={<InventoryTable />} />
        <Route path="/admin/orders" element={<OrdersTable />} />
        <Route path="/admin/sidebar" element={<Sidebar />} />
        <Route path="/admin/store-info" element={<StoreInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
