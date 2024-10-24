import { useState } from 'react';

function Footer() {
  const [supportMessage, setSupportMessage] = useState('');

  const sendWhatsAppMessage = () => {
    const phoneNumber = "83986151110"; // Substitua pelo número de telefone desejado
    const encodedMessage = encodeURIComponent(supportMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-[#15151D] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left side */}
        <div className="w-full md:w-auto">
          <h2 className="text-white text-xl font-bold"><a href="https://etrium.com.br">ETRIUM</a></h2>
          <p className="text-gray-400 mt-2">Otimize sua rotina jurídica com nosso software especializado!</p>
        </div>
        
        {/* Middle Navigation */}
        <div className="w-full md:w-auto text-white">
          <ul className="space-y-2 font-bold flex flex-col items-start md:items-center md:space-y-0 md:space-x-6 md:flex-row">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">Sobre nós</a></li>
            <li><a href="#service" className="hover:text-gray-400">Serviços</a></li>
            <li><a href="#planos" className="hover:text-gray-400">Planos</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </div>
        
        {/* Right side - Support */}
        <div className="w-full md:w-auto text-white">
          <h3 className="font-bold text-lg">Tire sua dúvida com nosso Suporte</h3>
          <div className="mt-4 flex items-center w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Digite sua mensagem" 
              value={supportMessage}
              onChange={(e) => setSupportMessage(e.target.value)}
              className="bg-[#2B2B36] text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none w-full md:w-auto"
            />
            <button 
              className="bg-[#3B82F6] hover:bg-blue-700 px-4 py-2 rounded-r-lg"
              onClick={sendWhatsAppMessage}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25l3 3-3 3M3.75 12h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
