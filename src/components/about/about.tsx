import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonShad } from '../ui/buttonShad';

function About() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section id="about" className="bg-[#15151D] py-16 px-4 relative overflow-hidden" ref={ref}>
      <div className="max-w-[1350px] mx-auto flex flex-col items-start relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-[#2D91FF] text-[20px] md:text-[22px] mt-8 md:mt-3"
        >
          Baixe nosso aplicativo!
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white font-bold text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[55px] lg:leading-[70px] mt-4"
        >
          Potencialize a eficiência do seu <br /> escritório de advocacia com o <br /> melhor software do mercado!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ButtonShad
                variant="outline"
                className="rounded-full w-[200px] h-12 bg-[#0072C7] font-bold text-white border-none"
              >
                Download App
              </ButtonShad>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Escolha o seu sistema</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a
                href="https://play.google.com/store/apps/details?id=br.com.etrium&hl=pt"
                target="_blank"
                className="no-underline"
              >
                <DropdownMenuItem className="hover:bg-[#0072C7] hover:text-white cursor-pointer">
                  Android
                  <DropdownMenuShortcut>
                    <FontAwesomeIcon icon={faGooglePlay} className="text-black hover:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </a>
              <a href="" target="_blank" className="no-underline">
                <DropdownMenuItem className="hover:bg-[#0072C7] hover:text-white cursor-pointer">
                  iOS
                  <DropdownMenuShortcut>
                    <FontAwesomeIcon icon={faAppStoreIos} className="text-black hover:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-4">
            <a href="">
              <FontAwesomeIcon icon={faAppStoreIos} className="text-white hover:text-[#2D91FF] text-[32px]" />
            </a>

            <a href="">
              <FontAwesomeIcon icon={faGooglePlay} className="text-white hover:text-[#2D91FF] text-[32px]" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Imagem da Nuvem */}
      <div className="absolute top-[-50px] right-[-100px] md:right-[-200px] lg:right-[-250px] z-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="./src/assets/image-about.svg"
          alt="img"
          className="w-[200px] md:w-[300px] lg:w-[400px]"
        />
      </div>
    </section>
  );
}

export default About;
