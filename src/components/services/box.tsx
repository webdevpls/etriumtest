import { FaArrowRight } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';

function Box() {
  return (
    <div className="bg-[#2A2A34] rounded-[40px] px-8 md:px-16 lg:px-32 py-12 md:py-16 lg:py-24 max-w-[1350px] mx-auto">
      <h2 className="text-white font-bold text-[32px] md:text-[45px] lg:text-[55px]">
        Alguns dos
      </h2>
      <h2 className="text-white font-bold text-[32px] md:text-[45px] lg:text-[55px] mb-8 md:mb-12 lg:mb-16">
        Nossos serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
        
        {/* Serviço 1 */}
        <div className="flex flex-col items-start gap-4">
          <img src="./src/assets/icon1.svg" alt="icon1" className="w-14 h-14" />
          <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Gestão de Processos
          </h3>
          <p className="text-gray-200 text-[14px] md:text-[15px]">
            Controle e organização eficiente de processos judiciais e extrajudiciais.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <a className="flex items-center gap-2 text-[#2D91FF] cursor-pointer">
                <span className="text-[#2D91FF]">Saiba mais</span>
                <FaArrowRight size={10} />
              </a>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray font-bold">
                      <h1>Gestão de Processos</h1>
                    </div>
                    <div>
                      <h3 className="text-sm">
                        Maximize a eficiência e a eficácia operacional com nossa abordagem inovadora em Gestão de Processos. Nossa solução especializada é projetada para otimizar fluxos de trabalho.
                      </h3>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Serviço 2 */}
        <div className="flex flex-col items-start gap-4">
          <img src="./src/assets/icon2.svg" alt="icon2" className="w-14 h-14" />
          <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Suporte Especializado
          </h3>
          <p className="text-gray-200 text-[14px] md:text-[15px]">
            Todo suporte necessário para atender todos nossos clientes e todas as dúvidas.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <a className="flex items-center gap-2 text-[#2D91FF] cursor-pointer">
                <span className="text-[#2D91FF]">Saiba mais</span>
                <FaArrowRight size={10} />
              </a>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray font-bold">
                      <h1>Suporte Especializado</h1>
                    </div>
                    <div>
                      <h3 className="text-sm">
                        Nosso suporte especializado está sempre à disposição para oferecer todo o auxílio necessário aos nossos clientes. Seja para solucionar dúvidas ou fornecer orientações técnicas, estamos comprometidos em garantir um atendimento de qualidade e eficiente.
                      </h3>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Serviço 3 */}
        <div className="flex flex-col items-start gap-4">
          <img src="./src/assets/icon3.svg" alt="icon3" className="w-14 h-14" />
          <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Automação Documental
          </h3>
          <p className="text-gray-200 text-[14px] md:text-[15px]">
            Criação, armazenamento e gerenciamento automatizado de documentos legais.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <a className="flex items-center gap-2 text-[#2D91FF] cursor-pointer">
                <span className="text-[#2D91FF]">Saiba mais</span>
                <FaArrowRight size={10} />
              </a>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray font-bold">
                      <h1>Automação Documental</h1>
                    </div>
                    <div>
                      <h3 className="text-sm">
                        Nossa solução oferece a criação, armazenamento e gerenciamento automatizado de documentos legais, simplificando o fluxo de trabalho e melhorando a produtividade.
                      </h3>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Box;
