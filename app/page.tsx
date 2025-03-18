import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4 h-dvh">
        <h1 className="font-extrabold text-2xl">Grupamento de Apoio rápido - SPEED</h1>
        <Image src="/logo.svg" alt="Logo" width={350} height={350} className="invert" />
        
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="font-extrabold text-xl">O que é a SPEED e sua função?</h2>
          <p>
          A SPEED é um grupamento de apoio rápido, que tem como objetivo auxiliar tanto a população da cidade
          de Oasis como também a corporação em acompanhamentos de veículos com alta performace. 
          </p>
          <p>
          Nossa equipe é composta por profissionais altamente treinados e equipados com veículos de ponta para
          garantir a segurança e eficiência em todas as operações. Estamos prontos para responder rapidamente a
          qualquer situação de emergência, oferecendo suporte imediato e eficaz.
          </p>
          <p>
          Além disso, a SPEED realiza treinamentos regulares e simulações para manter a equipe sempre preparada
          para os desafios do dia a dia. Nosso compromisso é com a excelência no atendimento e a proteção da
          comunidade.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4 h-dvh">
        <h2 className="font-extrabold text-xl">Vantagens de se tornar um piloto SPEED</h2>
        <ul className="list-disc p-4">
          <li>Veículo de alta performace exclusivo (Cayman GT);</li>
          <li>Armamento M4A1 liberado para qualquer um que entrar (Alunos/3°Agentes inclusos);</li>
          <li>Fardamento da SPEED;</li>
          <li>Prioridade em acompanhamentos de 4 rodas e veículos de alta performace/importados;</li>
          <li>Treinamentos semanais para teste e melhora de pilotagem;</li>
          <li>Eventos exclusivos para membros da SPEED;</li>
          <li>Bonificação para o destaque da semana/mês;</li>
          <li>Cursos para pessoas com pouca experiência.</li>
        </ul>
        <p>
          Ao adentrar a SPEED, o oficial membro recebe os benefícios listados acima. Lembrando que, mesmo com as atualizações, estas vantagens
          podem mudar para melhor com outras coisas adicionas em relação a polícia.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4 h-dvh">
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

      <div className="flex flex-col justify-center items-center max-w-[50%] m-auto gap-4 h-dvh">
        <h2 className="font-extrabold text-xl">Como se tornar um piloto SPEED?</h2>
        <p>
          Para se tornar um piloto SPEED, o oficial membro deverá seguir os seguintes passos:
        </p>
        <ol className="list-decimal p-4 flex flex-col gap-5">
          <li>Acessar a aba do nosso <Link href="/edital" className="text-blue-500">Edital</Link> e seguir as etapas da prova teórica;</li>
          <li>Após aprovado na prova teórica e ser colocado na 2° chamada, o oficial membro deverá realizar a prova prática;</li>
          <li>1° Prova prática com teste de modulação, curvas e becos;</li>
          <li>2° Prova prática com teste de rampas e controle aéreo do veículo;</li>
          <li>3° Prova prática com teste de acompanhamento e controle de veículo com rampa, curvas e becos.;</li>
        </ol>
        <p>
          Após a conclusão de todas as etapas, o oficial membro será avaliado e, caso aprovado, será integrado a SPEED.
        </p>
      </div>
    </>
  );
}
