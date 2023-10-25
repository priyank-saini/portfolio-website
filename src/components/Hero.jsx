import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute flex flex-row gap-5 inset-0 top-[120px] max-w-7xl mx-auto items-start`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 sm-h-80 h-40 violet-gradient"></div>
      </div>

      <div className={`${styles.heroHeadText}`}>
        <h1>Hi, I'm <span className="text-[#915eff]">Priyank</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          UI/UX developer crafts seamless <br className="sm:block hidden" /> user experiences
        </p>
      </div>
    </div>
    <ComputersCanvas />

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] flex items-start justify-center p-2 rounded-3xl border-4">
          <motion.dev animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1"></motion.dev>
        </div>
      </a>
    </div>
  </section>;
};

export default Hero;
