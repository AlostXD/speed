import React from "react";
import prisma from "@/app/prisma";
import Image from "next/image";

type props = {
  cargo: string;
}

export default async function OficialCard({cargo}: props) {
  const data = await prisma.oficiais.findMany({
    where: {
      cargo: cargo,
    },
  });

return (
  <>
    <div className="flex flex-col items-center justify-center w-full m-auto gap-12 p-12">
    <h1 className="text-4xl font-extrabold">{cargo}</h1>
    <div className="flex items-center justify-center gap-12 p-12">
      {data.map((data) => (
        <div
          key={data.id}
          className="group relative w-80 h-[500px] overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white"
        >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>

          <div className="absolute inset-0 bg-zinc-900/96 text-white p-4 flex flex-col items-start gap-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
            <h3 className="text-2xl font-bold">{data.name} - {data.gameId}</h3>
            <p className="text-lg italic">{data.cargo}</p>
            <p className="text-sm italic">{data.numero}</p>
            <h3 className="text-xl font-bold mx-auto mt-4">Unidade</h3>
            <p className="mx-auto">{data.unidade}</p>
            <Image src="./logo.svg" alt="Logo" width={200} height={200} className='invert m-auto' />
          </div>
        </div>
      ))}
    </div>
    </div>
  </>
);
}
