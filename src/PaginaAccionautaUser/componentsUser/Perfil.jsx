import React from 'react';

export default function Perfil() {
    return (
    <div className="bg-[#022D41] p-6 rounded-lg shadow-md h-screen">
        <div className="bg-[#033B54] p-8 rounded-lg mb-4">
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold text-white">ÁNGEL CANCHE</h2>
            <p className="text-sm text-[#7FAFFF]">Usuario de Accionauta</p>
        </div>
        </div>
        <ul className="space-y-4 text-white">
        {[
        'Información personal',
        'Historial de compras',
        'Configuración de cuenta',
        'Seguridad',
        'Cerrar sesión',
        ].map((option, index) => (
        <li key={index} className="p-2 bg-[#004466] rounded-lg hover:bg-[#007B93] text-center cursor-pointer">
            {option}
        </li>
        ))}
    </ul>
    </div>
    );
}
