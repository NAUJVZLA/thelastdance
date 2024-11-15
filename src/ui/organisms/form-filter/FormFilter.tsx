"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormField } from "@/ui/molecules/common/FormField";
import { ButtonOP } from "@/ui/atoms/buttonOp";
import { Button } from "@/ui/atoms/Button";

interface FormFilterValues {
  Placa: string;
  Año: string;
  Marca: string;
  Modelo: string;
}

interface FormFilterProps {
  onSubmit: (data: FormFilterValues) => void;
}

export default function FormFilter({ onSubmit }: FormFilterProps) {
  // Configurando el formulario con react-hook-form
  const { control, handleSubmit, reset } = useForm<FormFilterValues>({
    defaultValues: {
      Placa: "", // valor por defecto de 'Placa'
      Año: "", // valor por defecto de 'Año'
      Marca: "", // valor por defecto de 'Marca'
      Modelo: "", // valor por defecto de 'Modelo'
    },
  });

  // Función que resetea el formulario y limpia los filtros
  const handleReset = () => {
    reset(); // Resetea el formulario a sus valores por defecto
    onSubmit({ Placa: "", Año: "", Marca: "", Modelo: "" }); // Limpia los filtros cuando se presiona "Reset"
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Ejecuta el submit cuando se envía el formulario
      className="flex justify-center items-center gap-9"
    >
      {/* Campo de Placa */}
      <FormField
        label="Placa" // El nombre visible de la etiqueta
        type="text"
        name="Placa" // Nombre del campo, debe coincidir con la propiedad en FormFilterValues
        control={control} // Proporciona el control necesario para que react-hook-form maneje el estado
      />

      {/* Campo de Año */}
      <FormField
        label="Año" // Etiqueta del campo
        type="text"
        name="Año" // Nombre del campo debe coincidir con la propiedad en FormFilterValues
        control={control}
      />

      {/* Campo de Marca */}
      <FormField
        label="Marca" // Etiqueta del campo
        type="text"
        name="Marca" // Nombre del campo
        control={control}
      />

      {/* Campo de Modelo */}
      <FormField
        label="Modelo" // Etiqueta del campo
        type="text"
        name="Modelo" // Nombre del campo
        control={control}
      />

      {/* Botones de Filtrar y Reset */}
      <div className="flex gap-5 items-center justify-center align-middle">
        {/* Botón de enviar */}
        <Button type="submit" variant="car" className="w-20 h-30 text-[#ffff]">
          Filtrar
        </Button>

        {/* Botón de reset */}
        <ButtonOP type="button" variant="secondary" onClick={handleReset}>
          Resetear
        </ButtonOP>
      </div>
    </form>
  );
}
