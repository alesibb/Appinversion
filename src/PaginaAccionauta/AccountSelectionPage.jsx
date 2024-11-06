import React from "react";
import { Link } from "react-router-dom";

export default function AccountSelectionPage() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#002B36] px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          ¿Qué tipo de cuenta deseas explorar?
        </h1>
        <p className="text-lg text-[#7FAFFF]">
          Selecciona tu tipo de cuenta y descubre cómo maximizar tus inversiones con Accionauta
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Tarjeta de Cuenta de Inversor */}
        <Link to="/register-investor" className="group">
          <div className="w-full bg-[#022D41] text-white flex flex-col justify-center items-center rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-[#00B4D8] mb-2 group-hover:text-[#90E0EF]">
              Cuenta de Inversor
            </h2>
            <p className="text-center text-md">
              Accede a oportunidades de inversión diversificadas y personalizadas para hacer crecer tu capital.
            </p>
            <ul className="mt-4 text-sm text-[#7FAFFF] space-y-2">
              <li>✔ Análisis de mercado en tiempo real</li>
              <li>✔ Diversificación de portafolios</li>
              <li>✔ Gestión de riesgos optimizada</li>
            </ul>
          </div>
        </Link>

        {/* Tarjeta de Cuenta de Analista */}
        <Link to="/register-analyst" className="group">
          <div className="w-full bg-[#022D41] text-white flex flex-col justify-center items-center rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-[#00B4D8] mb-2 group-hover:text-[#90E0EF]">
              Cuenta de Analista
            </h2>
            <p className="text-center text-md">
              Realiza estudios detallados de inversiones y ayuda a otros usuarios a tomar decisiones informadas.
            </p>
            <ul className="mt-4 text-sm text-[#7FAFFF] space-y-2">
              <li>✔ Acceso a herramientas de análisis avanzadas</li>
              <li>✔ Generación de reportes personalizados</li>
              <li>✔ Colaboración con otros expertos</li>
            </ul>
          </div>
        </Link>
      </div>
    </section>
  );
}
