import React from "react";
import Navbar from "../../components/navbar";


export default function Home() {
  /*

    (Colocar essa parte depois no route.ts em /api para funcionar)
    import prisma from '@/app/prisma'


    export async function GET(request: Request) {
        const data = await prisma.oficiais.findMany();
        const nome = data.map((oficial) => oficial.name);
        const id = data.map((oficial) => oficial.id);
        const gameId = data.map((oficial) => oficial.gameId);
        const unidade = data.map((oficial) => oficial.unidade);
        const cargo = data.map((oficial) => oficial.cargo);
        const numero = data.map((oficial) => oficial.numero);


        return new Response(JSON.stringify({ nome, id, gameId, unidade, cargo, numero }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }




    async function fetchOficiais() {
      const response = await fetch("/api");
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    }
  */

return (
  <>
    <Navbar />
  </>
);
}
