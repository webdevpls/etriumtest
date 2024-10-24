import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Whyus() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="bg-[#F2F2F2] py-16 px-4">
      <div className="flex flex-col items-center justify-center text-center">      
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center mt-8"
      >
        <img
          src="../src/assets/group.svg"
          alt="img"
          className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1350px]"
        />
      </motion.div>
    </section>
  );
}

export default Whyus;
