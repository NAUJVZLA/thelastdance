import React, { useState } from "react";
import Eyes from "./svg/eye";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string;
}

export const Input = ({
  placeholder,
  type = "text",
  name,
  error,
  ...props
}: InputProps) => {
  // Estado para controlar si la contraseña es visible o no
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex flex-col mb-4">
      <input
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        name={name}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-lg text-gray-700 
            placeholder-gray-400 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-transparent
            ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      />
      {/* Aquí se muestra el icono de ojo */}
      {type === "password" && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          {/* El componente <Eyes> representará el ícono */}
          <Eyes isVisible={isPasswordVisible} />
        </span>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Componente Eyes para representar el ícono de ojo
const EyesM = ({ isVisible }: { isVisible: boolean }) => {
  return isVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12c0 3-2.5 5-5 5s-5-2-5-5 2.5-5 5-5 5 2 5 5z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.5 12c0-3.5 3-6 6.5-6 1.5 0 2.9.5 4 1.3a10.06 10.06 0 0 1 4-1.3c3.5 0 6.5 2.5 6.5 6s-3 6-6.5 6c-1.5 0-2.9-.5-4-1.3a10.06 10.06 0 0 1-4 1.3c-3.5 0-6.5-2.5-6.5-6z"
      ></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.5 13.5l-3-3"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.5 12c0-3.5 3-6 6.5-6 1.5 0 2.9.5 4 1.3a10.06 10.06 0 0 1 4-1.3c3.5 0 6.5 2.5 6.5 6s-3 6-6.5 6c-1.5 0-2.9-.5-4-1.3a10.06 10.06 0 0 1-4 1.3c-3.5 0-6.5-2.5-6.5-6z"
      ></path>
    </svg>
  );
};
