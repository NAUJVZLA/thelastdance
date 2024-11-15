"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { PerfilP } from "@/ui/atoms/svg/Perfil";
import { LogoD } from "@/ui/atoms/svg/LogoD";
import LogoP from "@/ui/atoms/svg/logo-login";

export default function DashboardAsideNavbar() {
  const { data: session } = useSession();

  // Función que maneja el logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <aside className="w-64 bg-white h-screen ml-3">
      <div className="flex h-16 items-center gap-2 px-4 border-b">
        <LogoD className="h-12 w-12" />
        <span className="font-semibold">Transport Solutions</span>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <PerfilP width={50} height={50} />
        <h1>{session?.user.name}</h1>
      </div>

      <nav className="flex flex-col mt-12">
        <LogoD className="w-20 h-30" />
        <Link href="#">Vehicles</Link>
        {/* llamo la funcion de salir */}
        <a className="flex gap-3 p-2 cursor-pointer" onClick={handleLogout}>
          Log out
        </a>
      </nav>
    </aside>
  );
}
