"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dto";
import { FormField } from "@/components/molecules/common/FormField";
import { Button } from "@/components/atoms/Button";
import { LockB } from "@/components/atoms/svg/lock";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
});

export const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  const handleLogin = async (data: ILoginRequest) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: data.email,
        password: data.password,
      });

      console.log(result);

      if (result?.error) {
        console.log("Ocurrio un error", JSON.parse(result.error));
        handleError(JSON.parse(result.error));
        return;
      }
      router.push("/dashboard/projects");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h4 className="text-sm font-semibold color-[#2F2B3D] text-center">
        Inicia sesion en tu cuenta y gestiona tu flota de vehiculos
      </h4>
      <FormField<ILoginRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        email="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />
      <FormField<ILoginRequest>
        control={control}
        type="password"
        label="Contraseña"
        email="password"
        error={errors.password}
      />
      <div className="flex justify-center items-center space-x-4">
        <Button
          className="text-[#FFFFFF]"
          variant="car"
          size="default"
          type="submit"
        >
          <LockB width={240} height={240} fill="#fff" /> Iniciar Sesión
        </Button>
      </div>
    </form>
  );
};
function handleError(arg: any) {
  throw new Error("Function not implemented.");
}
