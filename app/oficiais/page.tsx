import React from "react";
import Navbar from "../../components/navbar";


export default function Home() {
async function fetchOficiais() {
  const response = await fetch("/api");
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

return (
  <>
    <Navbar />
  </>
);
}
