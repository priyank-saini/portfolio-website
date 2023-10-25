import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapped } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" variants={fadeIn("right", "springs", 0.5 * index, 0.75)}>
        <div options={{ max: 45, scale: 1, speed: 50 }} className="bg-tertiary rounded-[20px] py-5 px-[20px] min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center  ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return <div>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary leading-[30px] max-w-3xl">
      A skilled UI/UX designer and front-end developer with a passion for crafting seamless digital experiences. Leveraging creativity and technical expertise, they transform concepts into captivating user interfaces. Proficient in merging aesthetics with functionality, they bring designs to life through proficient coding and an eye for detail.
    </motion.p>

    <div className="flex mt-20 flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service, index} index={index} {...service} />
      ))}
    </div>
  </div>;
};

export default SectionWrapped(About, "about");
