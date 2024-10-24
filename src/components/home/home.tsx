import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="relative w-full h-auto bg-[#F2E9E9] bg-cover pt-20">
      <div className="flex flex-col items-center justify-center px-4 md:px-8 max-w-7xlxl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Começa invisível e abaixo
          animate={{ opacity: 1, y: 0 }} // Termina visível e na posição correta
          transition={{ duration: 0.6, ease: "easeOut" }} // Duração de 0.6 segundos
          className="text-[#2A2A34] font-bold text-[32px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] text-center mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] tracking-normal leading-tight sm:leading-[40px] md:leading-[60px] lg:leading-[80px]"
        >
          Otimize sua <span className="text-[#2D91FF]">rotina jurídica</span> com <br />
          nosso software <span className="text-[#2D91FF]">especializado!</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Mesmo efeito de entrada
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Pequeno atraso para a entrada
          className="text-[#2A2A34] mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-center px-2 md:px-4 lg:px-8"
        >
          Traga inovação para sua prática jurídica e supere a concorrência com a ajuda de nossa tecnologia de ponta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Começa invisível e reduzido
          animate={{ opacity: 1, scale: 1 }} // Termina visível e com o tamanho original
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} // Duração maior para suavidade
          className="flex items-center justify-center mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[155px]"
        >
          <img
            src="./src/assets/img-home.svg"
            alt="imghome"
            className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[1400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
