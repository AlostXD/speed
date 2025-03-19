import Image from "next/image";
import Navbar from "../../components/navbar";


export default function Manual() {
  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto flex flex-col justify-center items-center gap-20 p-4">
        <h1 className="text-4xl font-extrabold">Manual de Conduta</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-extrabold">Regras internas</h2>
          <ol className="list-decimal">
            <li>Qualquer palavra dirigida a um superior deverá ser falada com Cargo/Patente ou Senhor(a).</li>
            <li>Necessita-se respeitar a hierarquia independente da divisão.</li>
            <li>Ser o mais limpo na rádio possível na rádio evitando o uso de palavras de baixo calão.</li>
            <li>Proibido ficar atirando sem motivo nas dependências do Departamento de Polícia (DP)</li>
            <li>Proibido qualquer atitude ilegal. (Roubo, Furto, etc...) É passível de EXONERAÇÃO.</li>
            <li>Má conduta é expressamente proibido tendo tolerância 0 para esses casos.</li>
            <li>Ao chegar a um local, é de extrema importância e OBRIGATÓRIO apresentar-se para a maior patente</li>
          </ol>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <h2 className="text-3xl font-extrabold">Condutas</h2>
          <ul className="flex flex-col justify-center items-center gap-4 border-b-2 p-4 w-full">
            <h3 className="text-2xl font-bold">Disparos durante patrulha com a SPEED</h3>
            <li>Só é permitido disparos em veículos com a permissão da maior patente presente (Comando ou a viatura primária do acompanhamento.)</li>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-2xl font-bold">Modulação</h3>
            <ul className="flex flex-col justify-center items-center gap-4">
              <h4 className="text-xl italic underline">Início de Patrulha</h4>
              <li>Ex: SPEED (Nome do oficial) iniciando código 0 na data de hoje a total QRV da coorporação. Qualquer QRU ou QRR, só lançar na rede.</li>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-4">
              <h4 className="text-xl italic underline">Final de Patrulha</h4>
              <li>Ex: SPEED (Nome do oficial) finalizando código 0.</li>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-4">
              <h4 className="text-xl italic underline">Acompanhamento</h4>
              <li>
                Ex: SPEED (Nome do oficial) iniciando acompanhamento em um Skyline Bluedragon preto com detalhes em vermelho, final
                 de placa Nulo, Quinto, Terceiro (053) na QTH do Banco Central.
                QRU de tráfico de drogas com vagas para mais duas unidades e um aéreo.</li>
            </ul>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-4 border-b-2 p-4 w-full">
            <li>Prezamos sempre por uma modulação limpa tentando ser o mais objetivo possível durante a mesma.</li>
            <li>Uma modulação tóxica ou poluída será Advertido.</li>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-4 border-b-2 p-4 w-full">
            <h3 className="text-2xl font-bold">Patrula</h3>
            <li>Só é permitido a utilização de uma Speed e uma Mike a cada 2 Viaturas 4-portas em Código 0 (2 viaturas = 1 speed e 1 Mike)</li>
            <li>Tenha o bom senso que não é somente você que está no acompanhamento</li>
            <li>É permitido a utilização da Speed para realizar abordagens somente havendo alguma viatura para estar auxiliando-a. Sempre peça 10-78  na rádio solicitando uma 4 portas ou alguma outra unidade para iniciar a abordagem.</li>
            <li>Sempre que possível e estiver em patrulha com a SPEED ou MIKE, Utilizar o uniforme da respectiva área. (Passível de ADV)</li>
          </ul>
        </div>



        <div className="flex flex-col justify-center items-center gap-12 border-b-2 p-4 w-full">
          <h2 className="text-3xl font-extrabold">Código Q</h2>
          <p>O código Q foi criado no intuito de facilitar a comunicação via rádio dos oficiais, oferecendo uma comunicação mais rápida e de fácil entendimento. Visto já a tabela de código 0, vamos passar para a próxima, a tabela dos códigos de patrulha.</p>
          <div className="">
            <Image src="/Q1.png" alt="Logo" width={500} height={500} className="" />
            <Image src="/Q2.png" alt="Logo" width={500} height={500} className="" />
          </div>
          <p className="font-bold">
            Vermelho: Mais utilizados
          </p>
          <p className="font-bold">
            Amarelo: Utilizados mas não com tanta frequência
          </p>
          <p className="font-bold">
            Verde: Pouco Utilizado
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-12 border-b-2 p-4 w-full">
          <h2 className="text-3xl font-extrabold">Códigos de Patrulha / Abordagem</h2>
          <p>A tabela dos códigos de patrulha, juntamente com os códigos Q, já são suficiente para uma modulação eficiente. Ambos possuem o mesmo intuito de facilitar a comunicação e auxiliar os oficiais. Agora, vamos pegar o Alfabeto fonético e, logo em seguida, a tabela numérica.</p>
          <div className="">
            <Image src="/cod1.png" alt="Logo" width={500} height={500} className="" />
            <Image src="/cod2.png" alt="Logo" width={500} height={500} className="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-12 border-b-2 p-4 w-full">
          <h2 className="text-3xl font-extrabold">Alfabeto Fonético</h2>
          <p>A tabela do alfabeto fonético, são formas de falar as letras que normalmente conhecemos, porém, de forma mais avançada para facilitar o entendimento e auxiliar na modulação e não ter uma confusão durante nosso dia a dia. Segue abaixo um modelo para entendimento do mesmo:</p>
          <div className="flex">
            <Image src="/alphafonetico.png" alt="Logo" width={500} height={500} className="" />
          </div>
          <p>
            Cada letra tem seu significado e, com isso, podemos entender melhor o que cada coisa pode significar. Alguns exemplos abaixo:<br></br><br></br>
            Fox de Foxtrot(F) é utilizado para oficiais do sexo Feminino<br></br>
            Mike/Steve Mike(M) é utilizado para oficiais do sexo Masculino<br></br>
            Delta Papa é utilizado para o Departamento Policial (DP)<br></br>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-12 border-b-2 p-4 w-full">
          <h2 className="text-3xl font-extrabold">Tabela numérica</h2>
          <p>A tabela dos códigos de patrulha, juntamente com os códigos Q, já são suficiente para uma modulação eficiente. Ambos possuem o mesmo intuito de facilitar a comunicação e auxiliar os oficiais. Agora, vamos pegar o Alfabeto fonético e, logo em seguida, a tabela numérica.</p>
          <div className="">
            <Image src="/numerica1.png" alt="Logo" width={500} height={500} className="" />
            <Image src="/numerica2.png" alt="Logo" width={500} height={500} className="" />
          </div>
        </div>
      </div>
    </>
  );
}
