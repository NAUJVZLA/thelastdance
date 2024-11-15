"use client";

import Button from "@/components/atoms/Button";


export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Página de Inicio</h1>
      <Button
        label="Clic Aquí"
        onClick={() => alert("¡Hola Mundo!")}
        variant="primary"
      />
    </div>
  );
}
