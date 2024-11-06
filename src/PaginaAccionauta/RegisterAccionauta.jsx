import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterAccionauta() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#002B36]">
      
      {/* Capa para oscurecer el video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Contenedor Principal con el formulario */}
      <div className="flex max-w-4xl bg-[#022D41] bg-opacity-95 rounded-lg shadow-2xl overflow-hidden w-full z-20">
        {/* Lado izquierdo - Texto e Imagen */}
        <div className="w-1/2 p-8 bg-[#004466] text-white flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Únete a Accionauta</h2>
          <p className="text-lg mb-6 text-center">
            Regístrate y accede a un mundo de oportunidades de inversión, análisis de mercado, y herramientas personalizadas.
          </p>
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="Accionauta logo"
            className="w-32 h-32"
          />
        </div>

        {/* Lado derecho - Formulario de Registro */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Registro en Accionauta
          </h1>
          <h3 className="text-lg font-medium text-center text-[#7FAFFF] mb-6">
            Crea tu cuenta y empieza a invertir
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Campos de registro */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-2 border border-[#7FAFFF] bg-transparent rounded-lg focus:outline-none focus:border-white placeholder-gray-300 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-2 border border-[#7FAFFF] bg-transparent rounded-lg focus:outline-none focus:border-white placeholder-gray-300 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 border border-[#7FAFFF] bg-transparent rounded-lg focus:outline-none focus:border-white placeholder-gray-300 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full px-4 py-2 border border-[#7FAFFF] bg-transparent rounded-lg focus:outline-none focus:border-white placeholder-gray-300 text-white"
              />
            </div>

            {/* Términos y Condiciones */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-[#7FAFFF]">
                Acepto los{" "}
                <a href="#" className="text-white hover:underline">
                  Términos y condiciones
                </a>
              </label>
            </div>

            {/* Botón de Registro */}
            <div className="mb-6 text-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#005F73] text-white py-3 rounded-lg font-semibold transition duration-150 ease-in-out ${
                  loading ? "cursor-not-allowed" : "hover:bg-[#007B93]"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white inline"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        fill="white"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Procesando...
                  </>
                ) : (
                  "Crear cuenta"
                )}
              </button>
            </div>

            {/* Enlace para Iniciar Sesión */}
            <div className="text-center text-[#7FAFFF]">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="text-white font-semibold hover:underline">
                Inicia sesión ahora
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
