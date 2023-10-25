import { Tilt } from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapped } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]">
        <div className="w-full h-[230px] relative">
          <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
          <div className="m-3 inset-0 absolute flex justify-end card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="rounded-full black-gradient w-10 h-10 flex justify-center items-center cursor-pointer">
              <img src={github} alt={github} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold">{name}</h3>
          <p className="text-secondary text-[15px] mt-2">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>

      </Tilt>
    </motion.div >
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          I've passionately crafted compelling UI/UX experiences, merging
          creativity and functionality. My graphic design ventures have birthed
          captivating visuals that tell stories. Additionally, my front-end
          development proficiency has translated designs into seamless
          interactive interfaces. A versatile creator, I've left my mark on
          projects encompassing UI/UX, graphic design, and front-end
          development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapped(Works, "");
