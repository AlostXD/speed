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
          <ul className="flex flex-col justify-center items-center gap-4 border-b-2 p-4">
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
          <ul className="flex flex-col justify-center items-center gap-4 border-b-2 p-4">
            <li>Prezamos sempre por uma modulação limpa tentando ser o mais objetivo possível durante a mesma.</li>
            <li>Uma modulação tóxica ou poluída será Advertido.</li>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-2xl font-bold">Patrula</h3>
            <li>Só é permitido a utilização de uma Speed e uma Mike a cada 2 Viaturas 4-portas em Código 0 (2 viaturas = 1 speed e 1 Mike)</li>
            <li>Tenha o bom senso que não é somente você que está no acompanhamento</li>
            <li>É permitido a utilização da Speed para realizar abordagens somente havendo alguma viatura para estar auxiliando-a. Sempre peça 10-78  na rádio solicitando uma 4 portas ou alguma outra unidade para iniciar a abordagem.</li>
            <li>Sempre que possível e estiver em patrulha com a SPEED ou MIKE, Utilizar o uniforme da respectiva área. (Passível de ADV)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
