import React from "react";
import prisma from "@/app/prisma";
import Image from "next/image";

type Props = {
  cargoSpeed: string;
};

export default async function OficialCard({ cargoSpeed }: Props) {
  const data = await prisma.oficiais.findMany({
    where: {
      cargoSpeed: cargoSpeed,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto gap-12 p-12">
      <h1 className="text-4xl font-extrabold">{cargoSpeed}</h1>
      <div className="flex items-center justify-center gap-12 p-4">
        {data.map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            {/* Nome do oficial acima do card */}
            <h1 className="text-white text-center text-3xl font-bold mb-4">
              {data.name}
            </h1>
            <h3 className="text-xl italic mb-4"><span className="font-bold">Codenome:</span> {data.codenome}</h3>
            <div
              className="group relative w-80 h-[500px] overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white"
            >
              <Image
                src={data.image}
                alt={data.name}
                fill={true}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 -z-10"
              />
              <div className="absolute inset-0 bg-zinc-900/96 text-white p-4 flex flex-col items-start gap-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                <h3 className="text-2xl font-bold">{data.name}</h3>
                <p className="text-lg italic font-light">ID: {data.gameId}</p>
                <p className="text-lg italic">{data.cargoUnidade}</p>
                <p className="text-sm italic">{data.numero}</p>
                <h3 className="text-xl font-bold mx-auto mt-4">Unidade</h3>
                <p className="mx-auto">{data.unidade}</p>
                <Image
                  src="./logo.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="invert m-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
