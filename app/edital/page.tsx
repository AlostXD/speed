import Footer from "@/components/footer";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />
        <div className="flex flex-col items-center justify-center h-full gap-12 p-12 w-full m-auto">
          <div className="relative w-[100%] h-[550px]">
            <Image src="/bg-speed-3.png" alt="SPEED" fill className="rounded-xl object-cover" />
          </div>
          <h1 className="text-4xl font-bold">Edital</h1>
          <div className="">
            <p>Neste aba iremos explicar o procedimento para estar adentrando a guarnição de apoio rápido...</p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4">
          <h2 className="font-extrabold text-xl">Requisitos para se tornar um piloto SPEED</h2>
          <ul className="list-disc p-4">
            <li>Possuir a patente de Aluno / 3° Agente +;</li>
            <li>Ter todos os cursos básicos fornecidos pela polícia (Modulação, Patrulha e Abordagem, Conduta);</li>
            <li>Ter noção de modulação aplicada na prática;</li>
            <li>Ter responsabilidade;</li>
            <li>Ter compromisso com a guarnição;</li>
            <li>Ter capacidade de cumprir a meta proposta para a guarnição (10 acompanhamentos semanais);</li>
            <li>Ter boa vontade de aprender;</li>
            <li>Ter humildade para aprender e ensinar;</li>
            <li>Ter vontade de crescer na unidade.</li>
          </ul>
          <p>
            Para se tornar um piloto SPEED, é necessário cumprir todos os requisitos listados acima. Caso o oficial membro não cumpra
            algum dos requisitos, o mesmo não poderá adentrar a SPEED.
          </p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4">
            <h2 className="text-2xl font-bold">Etapas do Edital</h2>
            <ol className="list-decimal p-4">
              <li><strong>Primeira Etapa:</strong> Prova teórica simples com perguntas básicas sobre modulação, conhecimento pessoal, etc;</li>
              <li><strong>Segunda Etapa:</strong> Prova prática com teste de modulação, curvas e becos;</li>
              <li><strong>Terceira Etapa:</strong> Prova prática com teste de rampas e controle aéreo do veículo;</li>
              <li><strong>Quarta Etapa:</strong> Prova prática com teste simulado de acompanhamento</li>
            </ol>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4">
            <h2 className="text-2xl font-bold">Prova teórica</h2>
            <p>Para ter acesso a nosso Edital/Prova teórica, acesse ele clicando <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeFeyBRvofB_heMkdsSgeWJaGLKI3d7GUV68RWIkaTRji4nMw/viewform?usp=sharing" className="text-blue-600">aqui</Link>.</p>
            <p>Todo o resto do processo será informado no Discord da Polícia em forma de aviso na aba da SPEED informando a data para as demais etapas. <strong className="text-xl">PRESTE ATENÇÃO NOS AVISOS DA SPEED, NÃO SERÁ AVISADO NO PRIVADO E NEM SEGUNDAS CHANCES.</strong></p>
          </div>
        </div>
      <Footer />
    </>
  );
}
