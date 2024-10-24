import { FaCheckCircle } from "react-icons/fa"



function Plano3() {
  return (
    <div className="w-96 h-[760px] rounded-[20px] overflow-hidden shadow-lg bg-[#2A2A34]  m-4">
      <div className="bg-white h-24 rounded-t-lg p-4 text-black items-center justify-center flex flex-col  gap-1">
        <h2 className="text-xl font-bold">Empresarial</h2>
        <p className="text-sm text-center w-64">Inicie no mundo jurídico do modo mais simples.</p>
      </div>
      <div className="p-4 mt-4 text-center flex flex-col">
        <span className="text-lg font-bold text-white">A combinar</span>
      </div>
      <div className=" gap-2 flex flex-col items-center">
        <div className="flex items-center text-green-500 my-2">
          <FaCheckCircle />
          <span className="ml-2">1 usuário(s)</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
          <FaCheckCircle />
          <span className="ml-2">100 processos</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
          <FaCheckCircle />
          <span className="ml-2"> Acesso ao aplicativo</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
        <FaCheckCircle />
          <span className="ml-2">Quadro de atividades</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
          <FaCheckCircle />
          <span className="ml-2">Gestão processual</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
          <FaCheckCircle />
          <span className="ml-2"> Robôs de pesquisa de processos</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
        <FaCheckCircle />
          <span className="ml-2">Controle financeiro</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
        <FaCheckCircle />
          <span className="ml-2">Geração de relatórios</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
        <FaCheckCircle />
          <span className="ml-2">Funcionalidades de parecer</span>
        </div>
        <div className="flex items-center text-green-500 my-2">
        <FaCheckCircle />
          <span className="ml-2">Logo Customizada</span>
        </div>
        
      </div>
    
    </div>

  )
}

export default Plano3
