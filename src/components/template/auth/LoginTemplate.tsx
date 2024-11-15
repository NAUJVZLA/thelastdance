import LinearIndeterminateIcon from "@/components/atoms/svg/logo-login";
import { LoginForm } from "@/components/organisms/auth/LoginForm";
import Link from "next/link";

export const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center h-screen ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <LinearIndeterminateIcon width={50} height={50} fill="#FF0000" />
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
