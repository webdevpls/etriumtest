import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      user_email: email,
      user_name: name,
      message: message,
    };

    emailjs.send('service_u8c4y1l', 'template_zgrm7m3', templateParams, 'yDDyrkrsu2IAfMH5E')
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response.status, response.text);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000); // Resetar após 3 segundos

        setEmail('');
        setName('');
        setMessage('');
      }, (error) => {
        console.error("Erro ao enviar e-mail:", error);
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="home" className="relative w-full py-16 bg-[#15151D]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10 text-left">
          <span className="font-bold text-[#2D91FF] text-[22px]">
            Contato
          </span>
          <h1 className="text-white font-bold text-[48px] leading-[58px]">
            Entre em contato conosco
          </h1>
        </div>

        <div className="relative w-full">
          {/* Container do Fundo */}
          <div className="w-full h-auto bg-[#1F1F2B] rounded-[24px] px-6 py-10 flex flex-col items-start max-w-[1400px] mx-auto">
            <img
              src="./src/assets/bg-contact.svg"
              alt="img"
              className="absolute inset-0 w-full h-full object-cover rounded-[24px] opacity-60"
            />

            {/* Formulário Alinhado à Esquerda */}
            <form
              className="relative z-10 w-full bg-opacity-90 space-y-4 text-left"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
                required
              />
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
                required
              />
              <textarea
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full p-4 rounded-xl font-bold text-white ${
                  isSent ? 'bg-green-500' : 'bg-[#2D91FF]'
                } flex items-center justify-center`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                    Enviando...
                  </>
                ) : isSent ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                    Enviado!
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
