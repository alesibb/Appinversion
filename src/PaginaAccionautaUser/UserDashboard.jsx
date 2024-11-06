import React from 'react';

export default function Dashboard() {
    return (
    <div className="bg-[#022D41] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">¡Accionauta!</h2>
        <div className="text-center mb-8 text-lg text-[#7FAFFF]">Hola Ángel, aquí verás la información del valor de tus inversiones</div>
        <div className="bg-[#033B54] p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold text-white mb-2">Monto disponible</h3>
        <p className="text-3xl text-green-500 font-bold">$250,000.00 MXN</p>
    </div>
    {[
        { label: 'SMART CASH', value: '0.00 MXN', info: 'Tasa mensual: 0.8%' },
        { label: 'SMART CASH DÓLARES', value: '0.00 USD', info: 'Fondos en dólares en lugar de pesos' },
        { label: 'TRADING MX', value: '0.00 MXN', info: 'Compra y venta de acciones en el mercado nacional' },
        { label: 'TRADING USA', value: '0.00 USD', info: 'Inversiones en el mercado estadounidense' },
        { label: 'ASESORÍAS', value: '0.00 MXN', info: 'Acceso a servicios de asesoría personalizada' },
    ].map((item, index) => (
        <div key={index} className="flex justify-between items-center text-white py-2 border-b border-gray-600 last:border-0">
            <div className="flex flex-col">
            <span className="font-bold">{item.label}</span>
            <span className="text-sm text-[#7FAFFF]">{item.info}</span>
            </div>
            <span className="text-lg">{item.value}</span>
        </div>
    ))}
    </div>
    );
}
