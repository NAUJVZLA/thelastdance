import LogoP from "@/components/atoms/svg/logo-login";
import { LoginForm } from "@/components/organisms/auth/LoginForm";
import Link from "next/link";

export const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Centrado del Logo y Título */}
        <div className="flex flex-col items-center mb-4">
          <LogoP width={50} height={50} fill="#7692FF" />
          <h2 className="text-[#7692FF] text-3xl font-bold mb-2">
            Transport Solutions S.A
          </h2>
        </div>

        <LoginForm />

        <div className="text-center">
          <p>
            ¿Problemas para iniciar sesión? Contacta al administrador del
            sistema
          </p>
        </div>
      </div>
    </div>
  );
};
