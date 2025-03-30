import React from "react";
import Navbar from "../../components/navbar";
import prisma from "@/app/prisma";
import { Oficiais } from "@prisma/client";

export default async function OficiaisPage() {
  const data: Oficiais[]= await prisma.oficiais.findMany({
    where: {
    cargo: "Comando Speed"
    },
  });

return (
  <>
    <Navbar />
    <div className="flex flex-col items-center justify-center w-full m-auto gap-12 p-12">
    <h1 className="text-4xl font-extrabold">Comandos Speed</h1>
    <div className="flex items-center justify-center gap-12 p-12">
      {data.map((data) => (
        <div
          key={data.id}
          className="group relative w-80 h-[500px] overflow-hidden rounded-xl shadow-lg"
        >
          {/* Foto do Oficial */}
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:translate-x-[-100%]"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>

          {/* Informações do Oficial */}
          <div className="absolute inset-0 bg-zinc-900 text-white p-4 flex flex-col justify-center items-center gap-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
            <h3 className="text-xl font-bold">Nome</h3>
            <p>{data.name}</p>
            <h3 className="text-xl font-bold">Cargo</h3>
            <p>{data.cargo}</p>
            <h3 className="text-xl font-bold">Passaporte / Game ID</h3>
            <p>{data.gameId}</p>
            <h3 className="text-xl font-bold">Número</h3>
            <p>{data.numero}</p>
            <h3 className="text-xl font-bold">Unidade</h3>
            <p>{data.unidade}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </>
);
}
