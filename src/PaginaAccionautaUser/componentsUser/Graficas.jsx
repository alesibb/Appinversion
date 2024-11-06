import React from 'react';

export default function Graficas() {
  return (
    <div className="bg-[#022D41] p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-white mb-4">CEMEX CPO</h2>
    <div className="text-white mb-6">CEMEX SAB DE CV</div>
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        {/* Aquí iría el componente de gráfica */}
        <div className="h-48 bg-gray-200 rounded-lg">Gráfico de ejemplo</div>
    </div>
    <div className="bg-[#033B54] p-4 rounded-lg">
        {[
            { label: 'Cierre', value: '$12.74' },
            { label: 'Apertura', value: '$10.39' },
            { label: 'Mínimo del día', value: '$0.00' },
            { label: 'Máximo del día', value: '$0.00' },
            { label: 'Mínimo 52 semanas', value: '$72.55' },
            { label: 'Máximo 52 semanas', value: '$115.50' },
            { label: 'Precio promedio ponderado', value: '$0.00' },
            { label: '% Variación', value: '0%' },
            { label: 'Volumen', value: '0.00' },
            { label: 'Volumen 6 meses', value: '83,78,844' },
        ].map((item, index) => (
        <div key={index} className="flex justify-between text-white py-1 border-b border-gray-600 last:border-0">
            <span>{item.label}</span>
            <span>{item.value}</span>
        </div>
        ))}
        </div>
    </div>
    );
}
