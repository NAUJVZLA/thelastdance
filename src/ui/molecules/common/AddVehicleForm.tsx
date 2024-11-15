"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField } from "@/ui/molecules/common/FormField";
import { Camera } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/ui/atoms/Button";

interface AddVehicleFormData {
  make: string;
  model: string;
  year: string;
  licensePlate: string;
  file: File;
}

// Definición de esquema de validación con Yup
const vehicleSchema = yup.object({
  make: yup.string().required("La marca es obligatoria"),
  model: yup.string().required("El modelo es obligatorio"),
  year: yup
    .string()
    .required("El año es obligatorio")
    .matches(/^\d{4}$/, "El año debe ser un número de 4 dígitos"),
  licensePlate: yup.string().required("La placa es obligatoria"),
  file: yup.mixed<File>().required("El archivo es obligatorio"),
});

export default function AddVehicleForm({
  onClose,
  onSuccess,
  refetchVehicles,
}: {
  onClose: () => void;
  onSuccess: () => void;
  refetchVehicles: () => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  // Configuración de react-hook-form con validación Yup
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AddVehicleFormData>({
    resolver: yupResolver(vehicleSchema),
  });

  // Función para manejar el cambio de archivo y vista previa
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file); // Actualiza el valor del archivo en el formulario
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string); // Establece la vista previa de la imagen
      reader.readAsDataURL(file); // Lee el archivo como una URL
    }
  };

  // Función para limpiar el archivo y la vista previa
  const handleFileClear = () => {
    setPreview(null); // Limpia la vista previa
    setValue("file", null as unknown as File); // Resetea el valor del archivo
  };

  // Función para manejar el envío del formulario
  const onSubmit = async (data: AddVehicleFormData) => {
    const formData = new FormData();
    formData.append("make", data.make);
    formData.append("model", data.model);
    formData.append("year", data.year);
    formData.append("licensePlate", data.licensePlate);
    formData.append("file", data.file);

    try {
      const response = await fetch("/api/vehicles", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Vehicle successfully created!");
        onSuccess(); // Llama a la acción de éxito
        onClose(); // Cierra el modal
        refetchVehicles(); // Recarga la lista de vehículos
      } else {
        alert("Failed to add vehicle. Please try again.");
      }
    } catch (error) {
      console.error("Error adding vehicle:", error);
      alert("An error occurred while adding the vehicle.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Manejador de envío del formulario
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        Agregar nuevo vehículo
      </h2>

      {/* Vista previa del avatar y botones de archivo */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera />
          )}
        </div>
        <div className="flex gap-4 mt-4">
          <Button variant="car" className="w-20 h-30 text-[#ffff] ">
            Cargar
            <input
              type="file"
              accept="image/jpeg, image/png"
              hidden
              {...register("file")}
              onChange={handleFileChange} // Maneja el cambio de archivo
            />
          </Button>
          <Button
            variant="destructive"
            ounded-lg
            color="error"
            onClick={handleFileClear}
          >
            Cancelar
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Solo se aceptan archivos en formato jpg, png
        </p>
        {errors.file && (
          <span className="text-red-500">{errors.file.message}</span>
        )}
      </div>

      {/* Inputs en dos columnas */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          type="text"
          label="Marca"
          name="make"
          placeholder="Ingresa la marca"
          error={errors.make}
        />
        <FormField
          control={control}
          type="text"
          label="Modelo"
          name="model"
          placeholder="Ingresa el modelo"
          error={errors.model}
        />
        <FormField
          control={control}
          type="number"
          label="Año"
          name="year"
          placeholder="Ingresa el año"
          error={errors.year}
        />
        <FormField
          control={control}
          type="text"
          label="Placa"
          name="licensePlate"
          placeholder="Ingresa la placa"
          error={errors.licensePlate}
        />
      </div>

      {/* Botones de acción */}
      <div className="flex justify-between mt-6">
        <button
          variant="outlined"
          color="inherit"
          onClick={onClose}
          className="w-32"
        >
          Cancelar
        </button>
        <Button type="submit" variant="car" color="primary" className="w-32">
          Agregar
        </Button>
      </div>
    </form>
  );
}
