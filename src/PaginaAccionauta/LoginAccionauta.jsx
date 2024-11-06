import React, { useState } from "react";

export default function LoginAccionauta() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#002B36]">
      {/* Contenedor Principal con el formulario */}
      <div className="w-full max-w-md p-8 bg-[#022D41] rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-2">¡BIENVENIDO!</h1>
        <p className="text-sm text-white mb-6">Inicia sesión para continuar...</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de Usuario */}
          <div>
            <input
              type="text"
              placeholder="Usuario"
              className="w-full p-3 rounded-md border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#7FAFFF]"
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-3 rounded-md border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#7FAFFF]"
              required
            />
            <a href="#" className="text-xs text-[#7FAFFF] block text-right mt-2">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón de Iniciar Sesión */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 bg-[#005F73] rounded-md text-white font-bold hover:bg-[#007B93] transition ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </div>
        </form>

        <div className="my-4 text-[#7FAFFF]">o</div>

        {/* Botón de Google */}
        <button className="w-full p-3 bg-white text-black rounded-md flex items-center justify-center space-x-2 font-semibold">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span>Acceder con Google</span>
        </button>

        {/* Enlace de registro */}
        <p className="mt-4 text-xs text-white">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-[#7FAFFF] hover:underline">
            ¡Regístrate!
          </a>
        </p>
      </div>
    </section>
  );
}
