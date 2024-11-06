import React from 'react';

export default function Compra() {
    return (
        <div className="bg-[#022D41] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">COMPRAR: CEMEX CPO</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <div className="text-lg text-gray-800 mb-4">
            CEMEX SAB DE CV - <span className="font-bold">$13.58</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-gray-700 mb-2">Cantidad</label>
            <input type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="0" />
            </div>
            <div>
            <label className="block text-gray-700 mb-2">Precio</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg bg-gray-100" readOnly value="$0.00" />
            </div>
        </div>
        <div className="mt-6 text-gray-700">
            <p>Disponible para comprar: <span className="font-bold">$102,000.00</span></p>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Comprar
        </button>
        </div>
    </div>
    );
}
