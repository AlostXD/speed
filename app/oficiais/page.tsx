import React from "react";
import Navbar from "../../components/navbar";
import OficialCard from "../../components/oficial";


export default async function OficiaisPage() {

return (
  <>
    <Navbar />
    <OficialCard cargoSpeed="Comando Speed"/>
    <OficialCard cargoSpeed="Auxiliar Speed"/>
    <OficialCard cargoSpeed="Instrutor Speed"/>
    <OficialCard cargoSpeed="Piloto Sênior"/>
    <OficialCard cargoSpeed="Piloto Pleno"/>
    <OficialCard cargoSpeed="Piloto Júnior"/>
    <OficialCard cargoSpeed="Braçal"/>
  </>
);
}
